# tue-ds-newsletter

A browser preview of the TU/e Research Data Stewards newsletter emails, with
one-click copy of the rendered HTML source (including absolute image URLs)
for pasting into [Copernica](https://www.copernica.com/).

The email templates live in [`emails/`](emails) as React Email components.
They are rendered to HTML, exported as a static Next.js site, and deployed to
GitHub Pages.

## Getting Started

Install the dependencies:

```sh
yarn
```

## Scripts

| Script | Description |
| --- | --- |
| `yarn dev` | Start the [react-email](https://react.email/) editor on `localhost:3000` for editing individual email templates. |
| `yarn build:emails` | Render every email in `emails/` to HTML in `public/emails/` (and copy `emails/static/` to `public/static/`). |
| `yarn build` | `build:emails` + `next build` → static export to `out/`. |
| `yarn preview` | Build the export and serve it locally under the production basePath, mirroring the deployed GitHub Pages site. |
| `yarn export` | Export emails via the react-email CLI. |

## Previewing the deployed site locally

`yarn dev` runs the react-email **editor**, not the exported Next.js site. To
see the site as it appears on GitHub Pages (sidebar, preview page, HTML
Source view), use:

```sh
yarn preview          # http://localhost:4321/tue-ds-newsletter/
yarn preview -l 5000  # custom port
```

This builds the static export and serves it under the production basePath
(`/tue-ds-newsletter`) via a temporary symlink root, so asset paths and image
URLs resolve exactly as they do when deployed.

## Copying the HTML source for Copernica

The deployed preview page has a **Preview / HTML Source** toggle:

1. Open the deployed preview for an email.
2. Click **HTML Source**.
3. Click **Copy HTML**.
4. Paste into Copernica.

Root-relative image paths (`/tue-ds-newsletter/static/...`) are rewritten to
absolute GitHub Pages URLs (`https://tue-datastewards.github.io/...`) at
runtime using the current deployment origin, so images load remotely in
email clients **without needing to be attached**. Copy from the **production**
site (post-merge) for stable URLs.

## Deployment

The site is deployed to GitHub Pages by two workflows in
[`.github/workflows/`](.github/workflows):

- `deploy.yml` — on push to `main`, builds and deploys to
  `https://tue-datastewards.github.io/tue-ds-newsletter/`.
- `pr-preview.yml` — on PR events, builds with a PR-specific basePath and
  deploys to `.../pr-preview/pr-<N>/`, posting the preview URL as a comment
  on the PR.

The production basePath (`/tue-ds-newsletter`) is set in
[`next.config.js`](next.config.js); the PR-preview workflow overrides it
via `NEXT_PUBLIC_BASE_PATH`.

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) — public domain dedication 🧡
