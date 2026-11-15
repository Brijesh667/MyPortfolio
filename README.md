# Brijesh Kumar — Portfolio

Personal portfolio for **Brijesh Kumar**, a MERN full-stack developer from
Bilaspur, India. Built on the open-source
[portfolio-template](https://github.com/sabin-paudel/portfolio-template) by
[Sabin Paudel](https://sabinpaudel.com.np), then rewritten with custom content.

## Single-page layout

Everything lives on one page as four scroll sections:

| Section | Anchor | Content |
| --- | --- | --- |
| Home | `#home` | Hero, stats, resume/project buttons |
| Projects | `#projects` | Four projects |
| About | `#about` | Intro, experience, education, skills |
| Contact | `#contact` | Email, resume, GitHub, LinkedIn |

The navbar follows the section in view (scrollspy) and all links use smooth
scrolling. A thin progress line at the top fills as the page scrolls. The hero
uses an interactive grid-pattern background and project cards use a
hover-animated `Live` button. The old `/about`, `/projects` and `/contact` URLs
redirect to their matching section through static pages in `public/`.

## Tech stack

- Vite + React 19 (JavaScript, no TypeScript)
- Tailwind CSS 3
- Lucide React
- Minimal Framer Motion (hero/nav load fade only)
- Static Open Graph image, sitemap, and robots

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Where the content lives

Everything you need to edit is in
[`src/data/portfolio.js`](./src/data/portfolio.js):

- profile, location, contact details, and social links
- hero, home page, about page, contact page, and footer copy
- projects, tags, and live/source URLs
- experience, education, and skills
- SEO metadata

Icons are registered in [`src/lib/icons.jsx`](./src/lib/icons.jsx).

## Images & resume

| Files | Used for |
| --- | --- |
| `public/images/brijesh-profile.webp` | Home hero, About/Contact gallery, metadata |
| `public/images/iitkgp-1.webp`, `iitkgp-2.webp` | About/Contact gallery |
| `public/images/sih-1.webp`, `sih-2.webp` | About/Contact gallery |
| `public/projects/*.webp` | Project card galleries |

The Resume buttons (Hero + Contact) open `portfolio.resumeUrl`, which currently
points to a Google Drive copy of the updated resume.

- Project cards slide **right → left every 2 seconds** with clickable dots.
- About photos change **every 3 seconds** with a random slide direction
  (left→right, right→left, top→bottom or bottom→top).
- Gallery image lists live in `portfolio.projects[].gallery` and
  `portfolio.images.gallery`.
- Screenshots look best around a 16:10 to 19:9 ratio.

## Projects included

1. **Sentinels of Truth** — AI fact-verification engine
2. **Applied** — AI job search and application tracker
3. **MyFitness** — TypeScript + MERN fitness platform with a RAG diet assistant
4. **Prashikshak** — training management system (SIH 2025 winner, source only)

## Environment variables

Copy `.env.example` to `.env.local`:

```env
VITE_WEB3FORMS_KEY=
VITE_UMAMI_ID=
VITE_GOOGLE_VERIFICATION=
```

- `VITE_WEB3FORMS_KEY` is required for the contact form. Get an access key from
  [web3forms.com](https://web3forms.com).
- `VITE_UMAMI_ID` and `VITE_GOOGLE_VERIFICATION` are optional.
- Vite only exposes variables that start with `VITE_`.

For GitHub Pages, add the Web3Forms key as a repository secret named
`WEB3FORMS_KEY` under **Settings → Secrets and variables → Actions**. The
deploy workflow passes it to the build as `VITE_WEB3FORMS_KEY`.

`.env.local` is ignored by git; `.env.example` is safe to commit.

## Build

```bash
npm run build     # writes dist/
npm run preview   # preview the production build
```

## GitHub Pages

The site is deployed to
[`https://brijesh667.github.io/MyPortfolio/`](https://brijesh667.github.io/MyPortfolio/)
by the workflow in `.github/workflows/deploy.yml`.

On every push to `main`, GitHub Actions:

1. installs dependencies with `npm ci`
2. builds the static site with `npm run build`
3. publishes the generated `dist/` folder to GitHub Pages

`vite.config.js` sets `base: "/MyPortfolio/"` for production builds, so assets
and local URLs resolve correctly under the repository subpath. Local
development (`npm run dev`) stays at the root URL.

Old URLs keep working as static redirect pages:

- `public/about/index.html` → `/#about`
- `public/projects/index.html` → `/#projects`
- `public/contact/index.html` → `/#contact`

## Credit

Template by [Sabin Paudel](https://sabinpaudel.com.np). Content and branding
customized for Brijesh Kumar.
