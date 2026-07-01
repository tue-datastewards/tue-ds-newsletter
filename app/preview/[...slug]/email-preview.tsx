"use client";

import { useState } from "react";

type EmailPreviewProps = {
  html: string;
  title: string;
};

type Mode = "preview" | "source";

export function EmailPreview({ html, title }: EmailPreviewProps) {
  const [mode, setMode] = useState<Mode>("preview");
  const [copied, setCopied] = useState(false);

  const copyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
    } catch {
      // Fallback for browsers without the async clipboard API
      const ta = document.createElement("textarea");
      ta.value = html;
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
          <code>{html}</code>
        </pre>
      )}
    </div>
  );
}
