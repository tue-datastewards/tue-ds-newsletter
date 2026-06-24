import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";

type EmailEntry = { slug: string; title: string };

export default function Home() {
  const manifestPath = path.join(
    process.cwd(),
    "public/emails/manifest.json"
  );
  let emails: EmailEntry[] = [];
  if (fs.existsSync(manifestPath)) {
    emails = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  }

  if (emails.length > 0) {
    redirect(`/preview/${emails[0].slug}`);
  }

  return (
    <div className="__empty">
      <p>No emails found. Run <code>yarn build:emails</code> first.</p>
    </div>
  );
}
