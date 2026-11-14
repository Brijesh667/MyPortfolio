# Brijesh Kumar — Portfolio

Personal portfolio for **Brijesh Kumar**, a MERN full-stack developer from
Bilaspur, India. Built on the open-source
[portfolio-template](https://github.com/sabin-paudel/portfolio-template) by
[Sabin Paudel](https://sabinpaudel.com.np), then rewritten with custom content.

## Single-page layout

Everything lives on `/` as four scroll sections:

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
redirect to their matching section.

Footer: home page only (`©` line + GitHub · LinkedIn · Email).

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Minimal Framer Motion (hero/nav load fade only)
- Generated Open Graph images, sitemap, and robots

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where the content lives

Everything you need to edit is in
[`app/lib/config/portfolio.ts`](./app/lib/config/portfolio.ts):

- profile, location, contact details, and social links
- hero, home page, about page, contact page, and footer copy
- projects, tags, and live/source URLs
- experience, education, and skills
- SEO metadata and structured data

Icons are registered in
[`app/lib/icons.tsx`](./app/lib/icons.tsx). Page layouts, SEO metadata, the
sitemap, and the Open Graph images all read from the config.

## Images & resume

| Files | Used for |
| --- | --- |
| `public/images/brijesh-profile.webp` | Home hero, About/Contact gallery, metadata |
| `public/images/iitkgp-1.webp`, `iitkgp-2.webp` | About/Contact gallery |
| `public/images/sih-1.webp`, `sih-2.webp` | About/Contact gallery |
| `public/projects/*.webp` | Project card galleries |
| `public/resume.pdf` | Resume download (Hero + Contact) |

- Project cards slide **right → left every 2 seconds** with clickable dots.
- About and Contact photos change **every 3 seconds** with a random slide
  direction (left→right, right→left, top→bottom or bottom→top).
- Gallery image lists live in `portfolio.projects[].gallery` and
  `portfolio.images.gallery`. The `image` field is the primary project image
  used by metadata/structured data.
- Screenshots look best around a 16:10 to 19:9 ratio.

## Projects included

1. **Sentinels of Truth** — AI fact-verification engine
2. **Applied** — AI job search and application tracker
3. **MyFitness** — TypeScript + MERN fitness platform with a RAG diet assistant
4. **Prashikshak** — training management system (SIH 2025 winner, source only)

## Environment variables

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=
UMAMI_ID=
GOOGLE_VERIFICATION=
```

- `NEXT_PUBLIC_WEB3FORMS_KEY` is required for the contact form. Get an access
  key from [web3forms.com](https://web3forms.com).
- `UMAMI_ID` and `GOOGLE_VERIFICATION` are optional.

For GitHub Pages, add the Web3Forms key as a repository secret named
`WEB3FORMS_KEY` under **Settings → Secrets and variables → Actions**. The
deploy workflow passes it to the build as `NEXT_PUBLIC_WEB3FORMS_KEY`.

`.env.local` is ignored by git; `.env.example` is safe to commit.

## Build

```bash
npm run lint
npm run build
npm run start
```

Deploy to Vercel or any Node.js-compatible host. After deploying, update
`url` in `app/lib/config/portfolio.ts` so canonical URLs, the sitemap, and
Open Graph tags point to the real domain.

## GitHub Pages

The site is deployed to
[`https://brijesh667.github.io/MyPortfolio/`](https://brijesh667.github.io/MyPortfolio/)
by the workflow in `.github/workflows/deploy.yml`.

On every push to `main`, GitHub Actions:

1. installs dependencies with `npm ci`
2. builds a static export with `GITHUB_PAGES=true`
3. publishes the generated `out/` folder to GitHub Pages

With `GITHUB_PAGES=true`, `next.config.ts` enables `output: "export"`,
`basePath: "/MyPortfolio"`, and unoptimized images so the site works under the
repository subpath. Local development (`npm run dev`) stays at the root URL.

## Credit

Template by [Sabin Paudel](https://sabinpaudel.com.np). Content and branding
customized for Brijesh Kumar.
