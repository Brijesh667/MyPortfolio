# Brijesh Kumar — Portfolio

Personal portfolio for **Brijesh Kumar**, a MERN full-stack developer from
Bilaspur, India. Built on the open-source
[portfolio-template](https://github.com/sabin-paudel/portfolio-template) by
[Sabin Paudel](https://sabinpaudel.com.np), then rewritten with custom content.

## Live sections

| Route | Content |
| --- | --- |
| `/` | Hero, working principles, featured projects |
| `/about` | Introduction, experience, education, skills |
| `/projects` | All projects with live/source links |
| `/contact` | Email, phone, socials, availability |

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion + Lucide React
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

## Images

The profile photo is `public/images/profile.webp` and is used on the home hero
and metadata fallback. The about and contact pages rotate through a gallery of
photos with a random slide direction on every change (left→right, right→left,
top→bottom, or bottom→top):

| File | Used for |
| --- | --- |
| `public/images/profile.webp` | Profile photo / home hero |
| `public/images/iitkgp-1.webp` | IIT Kharagpur campus |
| `public/images/iitkgp-2.webp` | At IIT Kharagpur |
| `public/images/sih-1.webp` | Smart India Hackathon 2025 winner |
| `public/images/sih-2.webp` | SIH 2025 grand finale team |

The gallery is defined in `portfolio.images.gallery`. Add or remove entries
there to change which photos rotate. Images are cropped with `object-cover`, so
any aspect ratio fits the boxes without stretching.

Project screenshots live in `public/projects/` and slide from right to left
automatically in the cards (every 2 seconds):

| Project | Files |
| --- | --- |
| Sentinels of Truth | `sentinels-1.png` … `sentinels-3.png` |
| Applied | `applied-1.png` … `applied-4.png` |
| MyFitness | `fitness-1.png` … `fitness-4.png` |
| Prashikshak | `prashikshak-1.png` … `prashikshak-3.png` |

Each project supports a `gallery` array in `portfolio.ts`; `image` is the
primary image used for metadata/structured data. To add or remove screenshots,
update the files and the matching `gallery` array. Keep screenshots in a
roughly 16:10 to 19:9 ratio for the best fit.

## Projects included

1. **Sentinels of Truth** — AI fact-verification engine
2. **Applied** — AI job search and application tracker
3. **MyFitness** — TypeScript + MERN fitness platform with a RAG diet assistant
4. **Prashikshak** — training management system (SIH 2025 winner, source only)

## Environment variables

Both integrations are optional:

```env
UMAMI_ID=
GOOGLE_VERIFICATION=
```

Create `.env.local` in the project root if you want to enable them.

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
