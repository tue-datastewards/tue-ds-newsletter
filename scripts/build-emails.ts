import { render } from "@react-email/render";
import React from "react";
import fs from "node:fs";
import path from "node:path";

const emailsDir = path.resolve(process.cwd(), "emails");
const outDir = path.resolve(process.cwd(), "public/emails");

type EmailEntry = { slug: string; title: string };

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const emailFiles = scanEmails(emailsDir);

  const manifest: EmailEntry[] = [];

  for (const file of emailFiles) {
    const relativePath = path.relative(emailsDir, file);
    const slug = relativePath.replace(/\.tsx$/, "");
    const title = prettifyTitle(slug);

    const mod = await import(file);
    const EmailComponent = mod.default;

    const element = React.createElement(EmailComponent, {
      unsubscribeUrl: "{unsubscribe}",
    });

    const html = await render(element, { pretty: true });

    const outPath = path.join(outDir, `${slug}.html`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);

    manifest.push({ slug, title });
    console.log(`  ✓ ${slug}`);
  }

  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nRendered ${manifest.length} email(s) to public/emails/`);
}

function scanEmails(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "static") continue;
      results.push(...scanEmails(fullPath));
    } else if (entry.name.endsWith(".tsx")) {
      results.push(fullPath);
    }
  }
  return results;
}

function prettifyTitle(slug: string): string {
  const parts = slug.split("/");
  const name = parts[parts.length - 1];
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
