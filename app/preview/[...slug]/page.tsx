import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { EmailPreview } from "./email-preview";

type EmailEntry = { slug: string; title: string };

function getEmails(): EmailEntry[] {
  const manifestPath = path.join(
    process.cwd(),
    "public/emails/manifest.json"
  );
  if (!fs.existsSync(manifestPath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
}

export function generateStaticParams() {
  const emails = getEmails();
  return emails.map((email) => ({
    slug: email.slug.split("/"),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  const emails = getEmails();
  const email = emails.find((e) => e.slug === slug);
  return {
    title: email ? `${email.title} — TU/e DS Newsletter` : "TU/e DS Newsletter",
  };
}

export default function PreviewPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  const emails = getEmails();
  const email = emails.find((e) => e.slug === slug);

  if (!email) {
    notFound();
  }

  const htmlPath = path.join(
    process.cwd(),
    "public/emails",
    `${slug}.html`
  );
  if (!fs.existsSync(htmlPath)) {
    notFound();
  }

  const html = fs.readFileSync(htmlPath, "utf-8");

  return <EmailPreview html={html} title={email.title} />;
}
