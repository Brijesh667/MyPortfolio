# Brijesh Kumar — Portfolio

Recruiter-focused portfolio for **Brijesh Kumar** — MERN full-stack developer and Agentic AI researcher at IIT Kharagpur.

**Live site:** [https://brijesh667.github.io/MyPortfolio/](https://brijesh667.github.io/MyPortfolio/)

## Stack

- **React 18 + Vite** (JavaScript/JSX)
- **Tailwind CSS** with CSS variable theme tokens
- **react-router-dom** — `/` and `/projects/:slug`
- **framer-motion** — reveals, count-up, slider fades, lightbox, timeline
- **react-icons**
- **react-markdown + remark-gfm + rehype-highlight + rehype-slug**
- **mermaid** — lazy-loaded in project detail pages
- **Web3Forms** — contact form (frontend only)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build & preview

```bash
npm run build        # production build → dist/
npm run preview      # serve dist/ locally
npm run build:pages  # GitHub Pages build + 404.html fallback
```

To preview the GitHub Pages base path locally (after `build:pages`), serve `dist` under `/MyPortfolio/` and fall back to `dist/404.html` for unknown paths.

## Deploy

### GitHub Pages (current)

Live at **https://brijesh667.github.io/MyPortfolio/**.

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`:

1. installs dependencies,
2. runs `npm run build:pages` (base path `/MyPortfolio/` + copies `index.html` to `404.html` so deep links work),
3. deploys the artifact through GitHub Actions.

Push an update:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Watch progress under the repo's **Actions** tab. If the repo is renamed, update `--base=/MyPortfolio/` in `package.json` (`build:pages`), the canonical/OG URLs in `index.html`, and the JSON-LD `url`.

### Vercel

Import the repo at [vercel.com/new](https://vercel.com/new). Vercel detects Vite automatically:

- **Build command:** `npm run build`
- **Output directory:** `dist`

`vercel.json` rewrites every path to `/index.html`, so `/projects/:slug` works on refresh. Vercel serves from `/`, so no base path is needed there. Update the canonical and OG URLs in `index.html` if you switch to a custom domain.

## Project structure

```
.
├─ public/
│  ├─ resume/Brijesh_Kumar_Resume.pdf        # replace with the current resume
│  ├─ certificates/iitkgp-internship.pdf     # placeholder certificate
│  └─ images/
│     ├─ profile.webp                        # placeholder profile photo
│     ├─ og.png
│     ├─ sih/sih-1.webp … sih-5.webp         # 3:2 placeholders
│     └─ projects/<slug>/shot-1.webp … 4     # 16:9 placeholders
├─ src/
│  ├─ components/
│  │  ├─ layout/ Header, MobileMenu, Footer
│  │  ├─ sections/ Hero, About, Experience, Projects, Skills, Achievements, Education, Contact
│  │  └─ ui/ Section, SectionHeading, Chip, TechChip, Button, Reveal, CountUp, ImageSlider, Lightbox, …
│  ├─ content/projects/ 4 markdown case studies
│  ├─ data/ site, experience, projects, skills, achievements, education
│  ├─ hooks/ useTheme, useScrollSpy
│  ├─ lib/ sendMessage, rateLimit, assets
│  ├─ pages/ Home, ProjectDetails, NotFound
│  ├─ App.jsx, main.jsx, index.css
├─ vercel.json
├─ .env.example
├─ PLAN.md
└─ README.md
```

## Edit content

All copy lives in `src/data/*.js`:

- `site.js` — name, role, email, location, social URLs, resume/photo paths, hero copy, About paragraphs (use `[[keywords]]` for the animated underline).
- `experience.js` — roles, bullets, tech, certificate path.
- `projects.js` — project cards, badges, bullets, tech, live/GitHub URLs, image arrays, featured flag.
- `skills.js` — AI/Agentic group + category groups.
- `achievements.js` — SIH gallery/story and DSA numbers/links.
- `education.js` — degree, subjects, practice bullets.

### Add or update a project

1. Add an object to `src/data/projects.js` (copy an existing one; `slug` must match the markdown file name).
2. Add four images at `public/images/projects/<slug>/shot-1.webp` … `shot-4.webp` (16:9).
3. Create `src/content/projects/<slug>.md` using an existing file as the template (Overview, Key Features, Architecture, Tech Stack & Why, Backend Flow, Database Schema, Challenges & Solutions, Results, Links).

Markdown is loaded at build time via `import.meta.glob`. Mermaid blocks are rendered lazily in both themes. The page title comes from the project header, so the first `# Heading` in the markdown is stripped before rendering to avoid a duplicate H1.

### Replace assets

Keep the same filenames so the data file does not need edits:

| Asset | Path | Size |
| --- | --- | --- |
| Profile photo | `public/images/profile.webp` | 4:5 (e.g. 800×1000) |
| Project screenshots | `public/images/projects/<slug>/shot-1…4.webp` | 16:9 (e.g. 1280×720) |
| SIH photos | `public/images/sih/sih-1…5.webp` | 3:2 (e.g. 1200×800) |
| Resume | `public/resume/Brijesh_Kumar_Resume.pdf` | any |
| Certificate | `public/certificates/iitkgp-internship.pdf` | any |
| Social preview | `public/images/og.png` | 1200×630 |

### Contact form

1. Create a free access key at [web3forms.com](https://web3forms.com/) using `bk767042@gmail.com`.
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY=…`.
3. For GitHub Pages, add the same variable as a repository secret or build-time environment value in the workflow.

Without a key the form shows a friendly error pointing to email instead of crashing. The form also includes a honeypot and a **2 messages per 24 hours** localStorage rate limit. `src/lib/sendMessage.js` is isolated so it can be replaced with a custom backend later.

## TODO values to confirm

- **Sentinels of Truth accuracy:** 99.00% from the resume is stored in `src/data/projects.js` with a `TODO: confirm` comment (another note says 94/100). Confirm and update both the data and case study.
- **GfG / LeetCode URLs:** currently platform homepages with TODO comments in `src/data/achievements.js`; replace with the real profiles.
- **Case study details:** each markdown file has explicit TODO sections for auth, routes, schemas, and deployment specifics.
- **SIH story:** written from the known facts; a TODO comment marks it for personalisation.

## Placeholders

Everything visual is local. The profile photo, project screenshots, SIH photos, and certificate are labelled placeholders, so the site is presentable now and can be upgraded later without code changes.

## Accessibility & motion

- Semantic headings, labels, alt text, visible focus rings, skip link, keyboard-operable menu, and focus containment in the image lightbox.
- `prefers-reduced-motion` disables reveals, auto-advance, count-ups, and smooth scrolling.
- Automated `axe-core` WCAG 2.1/2.2 A + AA scans run clean on home (dark/light/mobile) and project detail pages.
- Only the animations from the brief are used: fade-up reveals, hover lift, count-up, slider/lightbox fades, timeline draw, and About underline draw.
