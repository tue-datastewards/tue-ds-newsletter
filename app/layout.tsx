import fs from "node:fs";
import path from "node:path";
import { Sidebar } from "./components/sidebar";
import "./globals.css";

type EmailEntry = { slug: string; title: string };

function getEmails(): EmailEntry[] {
  const manifestPath = path.join(process.cwd(), "public/emails/manifest.json");
  if (!fs.existsSync(manifestPath)) {
    return [];
  }
  const raw = fs.readFileSync(manifestPath, "utf-8");
  return JSON.parse(raw);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const emails = getEmails();

  return (
    <html lang="en">
      <body>
        <div className="__layout">
          <Sidebar emails={emails} />
          <main className="__main">{children}</main>
        </div>
      </body>
    </html>
  );
}
