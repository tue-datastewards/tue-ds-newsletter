"use client";

import { useState } from "react";

type EmailPreviewProps = {
  html: string;
  title: string;
};

type Mode = "preview" | "source";

// Rewrite root-relative image URLs (e.g. /tue-ds-newsletter/static/RAPS.png)
// to absolute URLs against the current deployment origin, so the copied HTML
// loads images from the GitHub Pages site in email clients like Copernica
// (which can't resolve root-relative paths and would otherwise need images
// attached). Leaves already-absolute (https://) and protocol-relative (//)
// URLs untouched.
const toAbsoluteUrls = (html: string): string => {
  if (typeof window === "undefined") return html;
  const origin = window.location.origin;
  return html.replace(/src="\/(?!\/)/g, `src="${origin}/`);
};

export function EmailPreview({ html, title }: EmailPreviewProps) {
  const [mode, setMode] = useState<Mode>("preview");
  const [copied, setCopied] = useState(false);

  // The iframe renders the original (root-relative) HTML, which resolves
  // against the same origin on the deployed site. The source view + copy use
  // absolute URLs so the markup is portable when pasted into an email client.
  const sourceHtml = toAbsoluteUrls(html);

  const copyHtml = async () => {
    try {
      await navigator.clipboard.writeText(sourceHtml);
    } catch {
      // Fallback for browsers without the async clipboard API
      const ta = document.createElement("textarea");
      ta.value = sourceHtml;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="__email-preview">
      <div className="__email-toolbar">
        <div className="__email-tabs">
          <button
            type="button"
            className={
              mode === "preview" ? "__email-tab active" : "__email-tab"
            }
            onClick={() => setMode("preview")}
          >
            Preview
          </button>
          <button
            type="button"
            className={
              mode === "source" ? "__email-tab active" : "__email-tab"
            }
            onClick={() => setMode("source")}
          >
            HTML Source
          </button>
        </div>
        {mode === "source" && (
          <button
            type="button"
            className="__email-copy"
            onClick={copyHtml}
            aria-live="polite"
          >
            {copied ? "Copied!" : "Copy HTML"}
          </button>
        )}
      </div>
      {mode === "preview" ? (
        <div className="__preview-wrap">
          <iframe
            className="__preview-iframe"
            srcDoc={html}
            title={title}
          />
        </div>
      ) : (
        <pre className="__email-source">
          <code>{sourceHtml}</code>
        </pre>
      )}
    </div>
  );
}
