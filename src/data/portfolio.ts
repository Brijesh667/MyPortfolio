import type {
  Award,
  Education,
  ExperienceItem,
  FeaturedProject,
  HeroContent,
  MoreProject,
  NavItem,
  Project,
  SectionId,
  SectionIntro,
  SiteInfo,
  SkillGroup,
  SocialLink,
} from "../types";

export const site: SiteInfo = {
  name: "Brijesh Kumar",
  email: "bk767042@gmail.com",
  phoneDisplay: "+91 94241 65443",
  phoneHref: "tel:+919424165443",
  location: "Bilaspur, India",
  github: "https://github.com/Brijesh667",
  linkedin: "https://www.linkedin.com/in/brijesh-kumar-56093832a",
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeDownloadName: "Brijesh_Kumar_Resume.pdf",
  footerTagline: "AI systems, evaluation tooling, and full-stack products.",
};

export const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export const sectionOrder: SectionId[] = navItems.map((item) => item.id);

export const socials: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github", external: true },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin", external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail", external: false },
];

export const hero: HeroContent = {
  eyebrow: "Research Intern @ IIT Kharagpur",
  titleBefore: "I build AI systems that",
  titleEmphasis: "hold up",
  titleAfter: "under pressure.",
  lead:
    "Research intern at IIT Kharagpur, national winner at Smart India Hackathon 2025, and a full-stack developer. By day I stress-test multi-agent systems; the rest of the time I build MERN products.",
  stats: [
    { label: "SIH 2025", value: "1st nationally" },
    { label: "DSA problems", value: "250+" },
    { label: "Fact-check accuracy", value: "99.0%" },
    { label: "Faster benchmarks", value: "40%" },
  ],
};

export const marqueeItems = [
  "Python",
  "React 18",
  "Node.js",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "FastAPI",
  "Pinecone",
  "Docker",
  "Gemini",
  "TanStack Query",
  "Tailwind CSS",
];

export const workIntro: SectionIntro = {
  index: "01",
  eyebrow: "Selected work",
  title: "Projects built for real constraints.",
  lead:
    "Accuracy, latency, and actual users. Four builds spanning agentic AI research, RAG pipelines, and full-stack products — every code link goes to something real.",
};

export const featuredProject: FeaturedProject = {
  id: "sentinels",
  title: "Sentinels of Truth",
  subtitle: "AI fact-verification engine",
  tag: "Applied AI",
  tagAccent: true,
  year: "2026 — Present",
  description:
    "A retrieval-augmented fact-checking pipeline that verifies claims across six-plus knowledge domains and returns a grounded verdict — not a guess.",
  bullets: [
    "Engineered a pipeline averaging **11.78 seconds per claim** across 6+ knowledge domains.",
    "Evaluated 100 diverse claims to reach **99.00% accuracy** with zero pipeline errors.",
  ],
  tech: ["Tavily API", "Gemini 3.8 Flash Lite", "Pinecone"],
  links: [
    {
      label: "Live project",
      href: "https://sentinels-of-truth-93j9.vercel.app/",
      kind: "live",
    },
    {
      label: "Source code",
      href: "https://github.com/Brijesh667/Sentinels_of_Truth",
      kind: "code",
    },
  ],
  metrics: [
    { label: "Accuracy", value: "99.00", suffix: "%" },
    { label: "F1 score", value: "99.01", suffix: "%" },
    { label: "Precision", value: "98.04", suffix: "%" },
    { label: "Recall", value: "100", suffix: "%" },
  ],
  latency: { label: "Average latency", value: "11.78", suffix: "s" },
  panelStatus: "100 claims",
  panelNote: "6+ knowledge domains · 0 pipeline errors",
};

export const projects: Project[] = [
  {
    id: "applied",
    title: "Applied",
    subtitle: "AI job search & application tracker",
    tag: "Full-stack",
    year: "2026 — Present",
    description:
      "A job-hunt command center that searches six boards at once, de-duplicates listings, scores matches with AI, and keeps deadlines impossible to miss.",
    bullets: [
      "24 REST APIs aggregate 6 job boards in parallel with AI match scoring.",
      "WCAG 2.1 AA React 18 dashboard with a 14-day deadline ruler and 6-hour TTL caching.",
    ],
    tech: ["React 18", "Node.js", "Express", "MongoDB", "TanStack Query", "Gemini"],
    links: [
      { label: "Live", href: "https://applied-tracker.vercel.app/", kind: "live" },
      { label: "Code", href: "https://github.com/Brijesh667/Applied", kind: "code" },
    ],
  },
  {
    id: "myfitness",
    title: "MyFitness",
    subtitle: "Fitness platform with a RAG diet coach",
    tag: "Full-stack",
    year: "2026 — Present",
    description:
      "A mobile-first fitness tracker whose diet assistant returns Zod-validated meal plans — with the sources attached, so you can check its work.",
    bullets: [
      "40 REST APIs and 50+ exercises across 13 muscle groups in TypeScript + MERN.",
      "120-day activity heatmap, streak analytics, and 14 backend test suites.",
    ],
    tech: ["React 18", "TypeScript", "Node.js", "MongoDB", "Gemini", "Vitest"],
    links: [
      {
        label: "Live",
        href: "https://my-fitness-full-stack.vercel.app/",
        kind: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Brijesh667/My_Fitness_full_stack",
        kind: "code",
      },
    ],
  },
  {
    id: "prashikshak",
    title: "Prashikshak",
    subtitle: "Training management system",
    tag: "SIH Winner",
    tagAccent: true,
    highlight: true,
    year: "2025",
    description:
      "A centralized MERN portal for training programs — and the project that won first place at Smart India Hackathon 2025.",
    bullets: [
      "1st place nationally among 500+ competing teams.",
      "Role-based REST APIs cut manual scheduling work by 60%.",
    ],
    tech: ["MongoDB", "Express", "React.js", "Node.js"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/Brijesh667/Prashikshak",
        kind: "code",
      },
    ],
  },
];

export const moreProject: MoreProject = {
  year: "Open source",
  tag: "GitHub",
  title: "More on GitHub",
  subtitle: "Coursework, experiments & side builds",
  description:
    "Additional repositories, algorithm practice, and the small experiments that don't always make the résumé.",
  linkLabel: "github.com/Brijesh667",
  href: site.github,
};

export const experienceIntro: SectionIntro = {
  index: "02",
  eyebrow: "Experience",
  title: "Research and engineering, in parallel.",
  lead:
    "Multi-agent evaluation at IIT Kharagpur, full-stack delivery at my university, and a B.Tech running alongside both.",
};

export const experiences: ExperienceItem[] = [
  {
    role: "Research Intern",
    org: "Indian Institute of Technology Kharagpur",
    logo: "IIT",
    dates: "Jan 2026 — Present",
    location: "Kharagpur, India",
    bullets: [
      "Built **AgentCascade**, a testing framework that stress-tests Google's Agent2Agent (A2A) protocol in multi-agent scenarios.",
      "Designed reproducible experiments across three network topologies — Chain, Star, and Mesh — to surface agent communication failures.",
      "Automated Python evaluation pipelines with LLMs and local GPUs, increasing benchmark testing speed by **40%**.",
    ],
    tech: ["Python", "LLMs", "A2A protocol", "Multi-agent systems"],
  },
  {
    role: "Full-Stack Web Developer Intern",
    org: "Guru Ghasidas Vishwavidyalaya",
    logo: "GGU",
    dates: "Jan 2025 — Present",
    location: "Bilaspur, India",
    bullets: [
      "Developed full-stack web applications with React.js and Node.js, integrating REST APIs for seamless data communication.",
      "Built React.js interfaces and Node.js APIs as part of full-stack delivery.",
    ],
    tech: ["React.js", "Node.js", "REST APIs"],
  },
];

export const education: Education = {
  degree: "B.Tech in Information Technology",
  org: "Central University Bilaspur (GGU)",
  dates: "Aug 2023 — May 2027",
  cgpa: "CGPA 7.46",
  cgpaMax: "/ 10",
};

export const focusAreas = [
  "Agentic AI",
  "Multi-agent evaluation",
  "RAG pipelines",
  "Full-stack architecture",
  "Accessibility",
];

export const focusNote = "Currently: making multi-agent failures reproducible.";

export const skillsIntro: SectionIntro = {
  index: "03",
  eyebrow: "Toolkit",
  title: "The stack behind the work.",
  lead:
    "Grouped the way I actually reach for them — from the interface down to the database, and the tools that keep it all shippable.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "monitor",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication"],
  },
  {
    title: "Data",
    icon: "database",
    items: ["MongoDB", "PostgreSQL", "Redis", "Pinecone", "Vector search"],
  },
  {
    title: "Languages",
    icon: "code",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    title: "Tools & platforms",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "CI/CD",
      "Postman",
      "Vercel",
      "Render",
      "Clerk",
    ],
  },
  {
    title: "Foundations",
    icon: "sparkle",
    items: [
      "DSA",
      "OOP",
      "Problem solving",
      "Critical thinking",
      "Leadership",
      "Communication",
    ],
  },
];

export const skillsNote =
  "Also fluent in English and Hindi. 250+ DSA problems solved in C++.";

export const awardsIntro: SectionIntro = {
  index: "04",
  eyebrow: "Recognition",
  title: "Proof of work, on the record.",
  lead:
    "A national hackathon win, a deep algorithm practice habit, and a LeetCode profile that backs it up.",
};

export const awards: Award[] = [
  {
    title: "Smart India Hackathon 2025 — Winner",
    badge: "1st / 500+ teams",
    description:
      "Secured first place nationally for Prashikshak, a training management platform built on the MERN stack.",
    icon: "trophy",
    featured: true,
  },
  {
    title: "Data structures & algorithms",
    badge: "250+ solved",
    description:
      "Solved 250+ problems in C++ — 180 on GeeksforGeeks and 77 on LeetCode, with over 150 rated Medium or Hard.",
    icon: "code",
  },
  {
    title: "Competitive coding",
    badge: "61.5% acceptance",
    description:
      "Holds a 61.5% acceptance rate on LeetCode and outperforms 73.6% of global users on solution performance.",
    icon: "chart",
  },
];

export const contact = {
  index: "05",
  eyebrow: "Contact",
  titleBefore: "Let's build something that",
  titleEmphasis: "holds up.",
  lead:
    "Currently researching multi-agent systems at IIT Kharagpur and building full-stack products at my university. Have a hard problem or a product to ship? Email is the fastest way to reach me.",
};
