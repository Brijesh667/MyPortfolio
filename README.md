# Brijesh Kumar — Portfolio

**Live site:** [https://brijesh667.github.io/MyPortfolio/](https://brijesh667.github.io/MyPortfolio/)

A React + TypeScript portfolio built from `Updated_resume.pdf`. Vite powers the dev server and production build; there is no backend and no database.

## Stack

- **React 19** with TypeScript
- **Vite 8** for dev/build
- Plain CSS with design tokens (no UI framework)
- Google Fonts: Space Grotesk, Inter, Instrument Serif, JetBrains Mono

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build & preview

```bash
npm run build   # type-checks, then outputs a production build to dist/
npm run preview # serves dist/ locally
```

To preview exactly like GitHub Pages, build with the base path:

```bash
npm run build -- --base=/MyPortfolio/
npm run preview
```

## Deploy a live link

### GitHub Pages (current setup)

This repository is already configured to deploy to GitHub Pages on every push to `main`:

**Live URL:** https://brijesh667.github.io/MyPortfolio/

The workflow lives in `.github/workflows/deploy.yml`. It builds with the project base path `--base=/MyPortfolio/`, uploads `dist/`, and deploys it through GitHub Actions.

To publish an update:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The site redeploys automatically in about a minute. You can watch it under the repository's **Actions** tab.

If the repository is renamed, update these in the same commit:

- `--base=/MyPortfolio/` in `.github/workflows/deploy.yml`
- The canonical, `og:url`, `og:image`, and `twitter:image` URLs in `index.html`
- The `Person` JSON-LD `url` in `index.html`

### Vercel (alternative)

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Vercel auto-detects Vite. Keep the defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Deploy. Every push to the main branch redeploys automatically.

Vercel serves from `/`, so the `--base` flag is only needed for GitHub Pages.

### Netlify (alternative)

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### After using a custom domain

1. Add the production URL to `<link rel="canonical">` and `<meta property="og:url">` in `index.html`.
2. Change `og:image` and `twitter:image` to absolute URLs on that domain.
3. Update the base path in the Pages workflow if the site moves to a root domain.
4. Re-deploy.

## Project structure

```
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── index.html                  # Meta tags, theme bootstrap, JSON-LD
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Page composition
│   ├── styles.css              # Design tokens + all styling
│   ├── data/portfolio.ts       # ← All text, projects, links, skills
│   ├── types.ts                # Shared TypeScript types
│   ├── components/             # Header, Hero, Work, Experience, etc.
│   └── hooks/                  # Theme + copy-email hooks
├── public/
│   ├── resume.pdf              # Downloadable resume
│   ├── og.png                  # 1200×630 social preview
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── Updated_resume.pdf          # Original resume
└── README.md
```

## How to update content

Almost everything lives in **`src/data/portfolio.ts`**:

- `site` — name, email, phone, location, GitHub/LinkedIn, resume path
- `hero` — headline, intro copy, stats
- `featuredProject` and `projects` — project cards, links, tech, metrics
- `experiences`, `education`, `focusAreas`
- `skillGroups`, `awards`
- `marqueeItems`, section intros, contact copy

You do not need to touch component files for normal content edits.

### Add a new project

Add an object to the `projects` array in `src/data/portfolio.ts`:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  subtitle: "One-line summary",
  tag: "Full-stack",
  year: "2026",
  description: "What it does and why it matters.",
  bullets: [
    "A result with a **bold metric**.",
    "The engineering detail behind it.",
  ],
  tech: ["React", "Node.js", "MongoDB"],
  links: [
    { label: "Live", href: "https://example.com", kind: "live" },
    { label: "Code", href: "https://github.com/Brijesh667/repo", kind: "code" },
  ],
}
```

Double asterisks in bullets render as emphasis. The card is picked up automatically in the Work grid.

**To update your resume:** replace `public/resume.pdf` (keep the filename, or update `site.resumePath`). If you want the downloaded file renamed, change `site.resumeDownloadName`.

**To change the theme colour:** edit `--accent`, `--accent-contrast`, `--accent-ink`, and `--accent-soft` in the `[data-theme="dark"]` and `[data-theme="light"]` blocks of `src/styles.css`.

**To replace the social preview:** swap `public/og.png` with any 1200×630 PNG.

## Features

- Responsive layout tested at 1440, 1024, 768, 390, and 320 px
- System-aware dark/light theme with a persisted manual choice
- Accessible mobile menu with scroll lock, `inert` background, and focus return
- Scroll reveals, active section navigation, reading progress
- Copy-email button with clipboard fallback and `aria-live` feedback
- Reduced-motion support and semantic landmarks
- SEO metadata, Open Graph/Twitter cards, and `Person` JSON-LD

## Checks run

- `npm run build` passes (TypeScript + Vite production build)
- `axe-core` WCAG 2.1/2.2 A + AA scan: **0 violations** across dark/light desktop and mobile, plus tablet
- No console errors; no horizontal overflow at 1440 px or 390 px
- Theme toggle, mobile menu (open/Escape/inert), copy-to-clipboard, active nav, and resume/OG/favicon asset URLs verified

Automated checks are a floor, not a guarantee. Manual screen reader, keyboard, and zoom testing is still worthwhile.

## Credits

Designed and built for Brijesh Kumar. Content is based on the supplied resume; all project links point to the live apps and repositories listed in it.
