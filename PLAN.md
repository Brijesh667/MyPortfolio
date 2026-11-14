# Build Plan — Brijesh Kumar Portfolio (v2)

Source brief: the portfolio build brief supplied on 14 Nov 2026.
Owner: Brijesh Kumar · Target: recruiter-focused React portfolio with project detail pages.

## 1. Goal & hard constraints

Build a clean, fast, responsive personal portfolio with:

- A single-page home: Hero, About, Experience, Projects, Skills, Achievements, Education, Contact.
- Separate project detail routes at `/projects/:slug`, rendered from local markdown.
- Dark-first theme with a persistent light mode.
- Only the animations listed in the brief (fade-up, hover lift, count-up, slider/lightbox, timeline draw, underline draw, smooth scroll).
- No CGPA, no phone number, no header social icons, no AgentCascade card/link, no progress bars, no 60-fps-heavy extras.
- All editable content in `src/data/*.js` and `src/content/projects/*.md`.
- No external image URLs; all images are local placeholders that can be swapped by filename.

## 2. Stack (as briefed)

- React 18 + Vite, JavaScript/JSX
- Tailwind CSS 3 (utility classes) + CSS variables for theme tokens
- react-router-dom (`/`, `/projects/:slug`, 404)
- framer-motion (reveals, count-up, slider fades, lightbox, timeline line)
- react-icons
- react-markdown + remark-gfm + rehype-highlight + rehype-slug
- mermaid (lazy-loaded inside project details)
- Web3Forms contact form (key from `VITE_WEB3FORMS_KEY`)
- Deploy config: `vercel.json` rewrite for SPA routes; GitHub Pages retained with a 404 fallback so the existing live link still works.

## 3. Folder structure

```
.
├─ public/
│  ├─ resume/Brijesh_Kumar_Resume.pdf        (real resume)
│  ├─ certificates/iitkgp-internship.pdf     (placeholder PDF)
│  └─ images/
│     ├─ profile.webp
│     ├─ og.png
│     ├─ sih/sih-1.webp … sih-5.webp
│     └─ projects/<slug>/shot-1.webp … shot-4.webp
├─ src/
│  ├─ components/
│  │  ├─ layout/ Header.jsx, Footer.jsx, ThemeToggle.jsx, MobileMenu.jsx
│  │  ├─ sections/ Hero, About, Experience, Projects, Skills, Achievements, Education, Contact
│  │  └─ ui/ Section, SectionHeading, Chip, Button, Reveal, CountUp, Lightbox, ImageSlider, ThemeToggle
│  ├─ data/ site.js, experience.js, projects.js, skills.js, achievements.js, education.js
│  ├─ content/projects/ prashikshak.md, sentinels-of-truth.md, myfitness.md, applied.md
│  ├─ pages/ Home.jsx, ProjectDetails.jsx, NotFound.jsx
│  ├─ hooks/ useScrollSpy.js, useTheme.js
│  ├─ lib/ sendMessage.js, rateLimit.js
│  ├─ App.jsx, main.jsx, index.css
├─ vercel.json
├─ .env.example
├─ PLAN.md
└─ README.md
```

## 4. Design tokens

- Accent: indigo `#6366f1`; dark surfaces near-black (`#08090c`), light surfaces warm white (`#f7f7fb`).
- Fonts: Inter body, Space Grotesk headings (Google Fonts, `display=swap`).
- Radii: cards `1rem`, pills full. Borders subtle, one soft shadow level.
- Content width 1100–1200px; section padding 96px desktop / 64px mobile.
- Shared tokens in `src/index.css`; Tailwind colors map to `var(--…)`.
- Focus-visible ring uses the accent; contrast checked in both themes.

## 5. Data layer

- `site.js`: name, role, email, location, GitHub, LinkedIn, resume path, hero/about copy, availability tag.
- `experience.js`: two roles, tech chips, certificate link for IIT Kharagpur.
- `projects.js`: four projects, slugs, badges, bullets, tech, live/GitHub URLs, image arrays. Sentinels accuracy marked `TODO: confirm`.
- `skills.js`: AI/Agentic highlighted group + Languages, Frontend, Backend, Databases, Tools.
- `achievements.js`: SIH gallery/story + DSA numbers and profile-link TODOs.
- `education.js`: degree, institute, years, core subjects, two practice bullets.
- Markdown content loaded eagerly from `src/content/projects/*.md` via `import.meta.glob` for the details route.

## 6. Component plan

- **Layout:** sticky Header (scroll-spy, resume new-tab button, theme toggle, mobile menu), Footer.
- **UI:** Section wrapper, SectionHeading, Chip, Button, Reveal (fade-up), CountUp, ImageSlider (auto-advance, hover pause, dots, swipe, lightbox), Lightbox (arrows, swipe, Esc, scroll lock).
- **Hero:** availability tag, heading, tagline, education line, intro, CTAs, socials, profile photo.
- **About:** two paragraphs with animated keyword underlines.
- **Experience:** draw-on-scroll timeline, highlighted research card, certificate button.
- **Projects:** featured Prashikshak card (slider + content), three-card grid, conditional Live Demo.
- **Skills:** full-width AI/Agentic card + 2-col category grid with icon chips.
- **Achievements:** large SIH gallery + story, DSA count-up card.
- **Education:** centered card, subjects and practice bullets.
- **Contact:** email/LinkedIn/GitHub/location cards, copy email, Web3Forms form with validation, honeypot, 2-per-24h rate limit, all states.
- **Project details:** markdown, syntax highlighting, TOC, mermaid blocks, back link, live/GitHub buttons, 404 fallback.

## 7. Routes & deployment

- `/` — Home.
- `/projects/:slug` — ProjectDetails (lazy-loaded route so markdown/mermaid stay out of the home bundle).
- `*` — NotFound.
- `BrowserRouter basename` derives from `import.meta.env.BASE_URL` so GitHub Pages project paths work.
- `vercel.json`: rewrite `/(.*)` to `/index.html`.
- GitHub Pages workflow: build with `--base=/MyPortfolio/`, copy `dist/index.html` to `dist/404.html` for deep-link fallback, deploy via Actions.

## 8. Placeholder assets (local, generated)

- `profile.webp` — 4:5 neutral card.
- `sih/sih-1…5.webp` — 3:2 neutral cards with labels.
- `projects/<slug>/shot-1…4.webp` — 16:9 neutral cards with project/slide labels.
- `certificates/iitkgp-internship.pdf` — one-page placeholder PDF.
- Real CV copied to `public/resume/Brijesh_Kumar_Resume.pdf`.
- Branded OG placeholder at 1200×630; favicon refreshed to the indigo theme.

## 9. Phases (build order)

1. **Setup** — check out JS stack, install deps, Tailwind, router, theme tokens, fonts, `vercel.json`, `.env.example`, asset generator.
2. **Shared UI** — Section, SectionHeading, Chip, Button, Reveal, CountUp, ImageSlider, Lightbox, ThemeToggle.
3. **Layout** — Header, mobile menu, scroll-spy, Footer.
4. **Sections** — Hero, About, Experience, Skills, Education, Achievements shell.
5. **Projects** — cards, featured card, slider/lightbox, real links from resume.
6. **Project details** — markdown pipeline, mermaid, TOC, 4 content files, 404.
7. **Achievements** — SIH gallery/lightbox + DSA count-up card.
8. **Contact** — form logic, Web3Forms, honeypot, rate limiting, states.
9. **Polish** — responsive 360/768/1280, a11y, reduced motion, lazy images, route code-splitting, meta/OG/favicon, 404.
10. **Docs & deploy** — README, Vercel config, Pages fallback, build/test/push/deploy.

## 10. Verification checklist

- `npm run build` passes; no console errors or failed asset requests.
- Home + all four project routes load directly (deep link) and via navigation.
- Theme toggle persists; both themes pass contrast checks.
- Sliders auto-advance, pause on hover, support dots/swipe, open lightbox, Esc closes.
- Contact validation, honeypot, rate limit, missing-key error, success/error states tested.
- 360px / 768px / 1280px no horizontal overflow.
- axe-core WCAG 2.1/2.2 A/AA scan: zero violations.
- GitHub Pages live URL still works after redeploy; Vercel rewrite present.
- All content is editable from `src/data` or `src/content`; assets replaceable in `public/`.

## 11. Decisions / notes

- Real resume, LinkedIn, GitHub, and project URLs come from `Updated_resume.pdf`. Prashikshak has no live URL, so its Live Demo button is omitted.
- Sentinels accuracy remains a data-level `TODO: confirm` (99.00% per resume).
- GfG/LeetCode profile URLs are not in the resume; stored as TODO placeholders in `achievements.js` and rendered only when a URL exists.
- Existing GitHub Pages deployment is preserved and made SPA-safe; `vercel.json` is added for the brief's preferred host.
