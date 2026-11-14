import type { PortfolioConfig } from "@/app/types";

const portfolio: PortfolioConfig = {
  url: "https://brijesh667.github.io/MyPortfolio",

  profile: {
    name: "Brijesh Kumar",
    role: "Full-Stack Developer",
    tagline: "Building full-stack products and AI-powered systems.",
    image: "/about.png",
    availability: "Open to full-stack and AI engineering roles",
    location: "Bilaspur, India",
  },

  geo: {
    city: "Bilaspur",
    country: "India",
    countryCode: "IN",
    timezone: "Asia/Kolkata",
    flag: "🇮🇳",
    coordinates: {
      lat: 22.0797,
      lng: 82.1391,
    },
  },

  images: {
    hero: "/images/brijesh-profile.webp",
    about: "/images/brijesh-profile.webp",
    contact: "/images/brijesh-profile.webp",
    seoFallback: "/images/brijesh-profile.webp",
    gallery: [
      { src: "/images/brijesh-profile.webp", alt: "Brijesh Kumar portrait" },
      {
        src: "/images/iitkgp-1.webp",
        alt: "IIT Kharagpur campus building",
      },
      {
        src: "/images/iitkgp-2.webp",
        alt: "Brijesh Kumar at IIT Kharagpur",
      },
      {
        src: "/images/sih-1.webp",
        alt: "Brijesh Kumar winning Smart India Hackathon 2025",
      },
      {
        src: "/images/sih-2.webp",
        alt: "Team at the Smart India Hackathon 2025 grand finale",
      },
    ],
  },

  seo: {
    title: "Brijesh Kumar | Full-Stack Developer & SIH 2025 Winner",
    titleTemplate: "%s | Brijesh Kumar",
    description:
      "Brijesh Kumar is a MERN full-stack developer from Bilaspur, India, building production web applications and AI-powered systems. SIH 2025 winner and research intern at IIT Kharagpur.",
    applicationName: "Brijesh Kumar Portfolio",
    keywords: [
      "Brijesh Kumar",
      "full-stack developer",
      "MERN developer",
      "full-stack developer Bilaspur",
      "full-stack developer India",
      "React developer",
      "Node.js developer",
      "TypeScript developer",
      "AI engineer",
      "agentic AI",
      "MERN stack developer India",
      "Smart India Hackathon winner",
    ],
    sameAs: [
      "https://github.com/Brijesh667",
      "https://www.linkedin.com/in/brijesh-kumar-56093832a",
    ],
    googleVerification: process.env.GOOGLE_VERIFICATION,
    image: "/images/brijesh-profile.webp",
  },

  analytics: {
    umamiId: process.env.UMAMI_ID,
  },

  contact: {
    email: "bk767042@gmail.com",
    phone: "+919424165443",
    showPhone: true,
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Brijesh667",
      icon: "Github",
      tooltip: "Projects, experiments, and open source",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brijesh-kumar-56093832a",
      icon: "Linkedin",
      tooltip: "Experience and professional profile",
    },
    {
      name: "Email",
      href: "mailto:bk767042@gmail.com",
      icon: "Mail",
      tooltip: "Let's talk about your project",
    },
  ],

  hero: {
    kicker: "Brijesh Kumar · Full-Stack Developer",
    heading: [
      { text: "Full-stack products," },
      { text: "AI systems," },
      { text: "built end to end.", gradient: true },
    ],
    primaryCta: { label: "View projects", href: "/projects", icon: "ArrowRight" },
    secondaryCta: { label: "About Brijesh", href: "/about", icon: "ChevronRight" },
  },

  heroStats: [
    { value: "4", label: "Projects shipped" },
    { value: "SIH 2025", label: "National winner" },
    { value: "Bilaspur, India", label: "Based in" },
  ],

  principles: [
    {
      icon: "Layers3",
      title: "Solve the real problem",
      body: "Start from how people actually work, not from the stack. The simplest change that removes friction is usually the right one.",
    },
    {
      icon: "Code2",
      title: "Measure what matters",
      body: "Latency, accuracy, and accessibility are product features. If a result isn't measured, it isn't finished.",
    },
    {
      icon: "Wand2",
      title: "Make it feel effortless",
      body: "Good APIs and interfaces should disappear. Careful details make complex systems feel simple to use.",
    },
  ],

  home: {
    principlesKicker: "How I Work",
    principlesTitle: "How I Build",
    principlesDescription:
      "A practical approach to full-stack products, AI systems, and the details in between.",
    workKicker: "Selected Work",
    workTitle: "Things I've Built",
    workDescription:
      "Full-stack platforms and AI tools — from fact-verification engines to job-search dashboards.",
    aboutCta: { label: "More about Brijesh", href: "/about", icon: "ArrowRight" },
    projectsCta: { label: "View all projects", href: "/projects", icon: "ArrowRight" },
  },

  status: {
    label: "Currently building",
    note: "Agentic AI research at IIT Kharagpur",
  },

  navigation: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "User" },
    { label: "Work", href: "/projects", icon: "Briefcase" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],

  footer: {
    description:
      "The personal portfolio of Brijesh Kumar, a MERN full-stack developer from Bilaspur, India, building web products and AI-powered systems.",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Selected projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    shareTitle: "Brijesh Kumar | Full-Stack Developer",
    copyright: "Brijesh Kumar",
  },

  projects: [
    {
      id: "1",
      title: "Sentinels of Truth",
      description:
        "An AI fact-verification engine that checks claims across multiple knowledge domains.",
      longDescription:
        "Engineered an AI fact-checking pipeline that verifies claims across 6+ knowledge domains at an average latency of 11.78 seconds per claim. Evaluated on 100 diverse factual claims with 99.00% accuracy, 99.01% F1-score, 98.04% precision, and 100% recall with zero pipeline errors.",
      role: "AI pipeline and full-stack development",
      image: "/projects/sentinels-1.webp",
      gallery: [
        "/projects/sentinels-1.webp",
        "/projects/sentinels-2.webp",
        "/projects/sentinels-3.webp",
      ],
      tags: ["Tavily API", "Gemini", "Pinecone", "React", "Node.js"],
      liveUrl: "https://sentinels-of-truth-93j9.vercel.app",
      githubUrl: "https://github.com/Brijesh667/Sentinels_of_Truth",
      featured: true,
    },
    {
      id: "2",
      title: "Applied",
      description:
        "An AI-powered job search and application tracker built on the MERN stack.",
      longDescription:
        "Engineered a MERN job-tracking platform with 24 REST APIs that aggregates 6 job boards in parallel with de-duplication and AI match scoring. Built a React 18 + TanStack Query dashboard with a 14-day deadline ruler, WCAG 2.1 AA accessibility, and 6-hour TTL caching so repeat searches skip all provider calls.",
      role: "Full-stack design and development",
      image: "/projects/applied-1.webp",
      gallery: [
        "/projects/applied-1.webp",
        "/projects/applied-2.webp",
        "/projects/applied-3.webp",
        "/projects/applied-4.webp",
      ],
      tags: [
        "React 18",
        "Node.js",
        "Express",
        "MongoDB",
        "TanStack Query",
        "Tailwind CSS",
        "Gemini",
      ],
      liveUrl: "https://applied-chi.vercel.app",
      githubUrl: "https://github.com/Brijesh667/Applied",
      featured: true,
    },
    {
      id: "3",
      title: "MyFitness",
      description:
        "A mobile-first TypeScript + MERN fitness tracker with a RAG diet assistant.",
      longDescription:
        "Implemented a mobile-first TypeScript + MERN fitness tracker with 40 REST APIs and 50+ exercises across 13 muscle groups. Built a RAG diet assistant that returns Zod-validated meal plans with source citations, plus a 120-day heatmap and rule-based streak analytics covered by 14 backend test suites.",
      role: "Full-stack development",
      image: "/projects/fitness-1.webp",
      gallery: [
        "/projects/fitness-1.webp",
        "/projects/fitness-2.webp",
        "/projects/fitness-3.webp",
        "/projects/fitness-4.webp",
      ],
      tags: [
        "React 18",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini",
        "Vitest",
      ],
      liveUrl: "https://my-fitness-full-stack.vercel.app",
      githubUrl: "https://github.com/Brijesh667/My_Fitness_full_stack",
      featured: true,
    },
    {
      id: "4",
      title: "Prashikshak",
      description:
        "A centralized MERN training portal that won 1st place at Smart India Hackathon 2025.",
      longDescription:
        "Created a centralized MERN training portal that won 1st Place at Smart India Hackathon 2025 out of 500+ teams. Architected REST APIs for role-based access and participant tracking, reducing manual scheduling work by 60%.",
      role: "Full-stack development",
      image: "/projects/prashikshak-1.webp",
      gallery: [
        "/projects/prashikshak-1.webp",
        "/projects/prashikshak-2.webp",
        "/projects/prashikshak-3.webp",
      ],
      tags: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: null,
      githubUrl: "https://github.com/Brijesh667/Prashikshak",
      featured: true,
    },
  ],

  projectsPage: {
    kicker: "Selected work",
    heading: [
      { text: "Products built" },
      { text: "end to end," },
      { text: "shipped with care.", gradient: true },
    ],
    description:
      "Full-stack platforms and AI tools built with the MERN stack, React, TypeScript, and modern APIs.",
    indexCard: {
      title: "Work index",
      countLabel: "Projects",
      focusLabel: "Primary focus",
      focusValue: "Full-stack",
      toolsLabel: "Main tools",
      toolsValue: "MERN · Next.js",
      footer: "From AI pipelines to production dashboards.",
    },
    moreText:
      "More experiments, prototypes, and older work live on GitHub.",
    moreCtaLabel: "Explore more on GitHub",
  },

  aboutPage: {
    profileBadge: "Profile",
    introductionTitle: "Introduction",
    experienceTitle: "Work Experience",
    educationTitle: "Education",
    skillsTitle: "Technical Skills",
  },

  contactPage: {
    kicker: "Let's connect",
    heading: [
      { text: "Have a product" },
      { text: "worth building?", gradient: true },
    ],
    intro:
      "I'm a full-stack developer open to roles and collaborations in web products and AI systems.\nIf you're building something and need someone who can own it end to end, send a message.",
    imageBadge: "Let's Talk",
    emailCardTitle: "Drop me a line",
    emailCardText:
      "The fastest way to reach me. I check email daily and usually reply within a day.",
    responseTime: "Usually replies within a day",
    basedInBody: "Based in Bilaspur, Chhattisgarh, and open to remote work.",
    timezoneBody: "IST (UTC+5:30). Usually online from 10 AM to 7 PM.",
    takeActionTitle: "Take action",
    takeActionText: "Pick the next step that works best for you.",
    actions: [
      {
        title: "View GitHub",
        body: "Explore repositories and recent projects.",
        href: "https://github.com/Brijesh667",
        icon: "Github",
      },
      {
        title: "Connect on LinkedIn",
        body: "View my professional profile and experience.",
        href: "https://www.linkedin.com/in/brijesh-kumar-56093832a",
        icon: "Linkedin",
      },
      {
        title: "Send an email",
        body: "Reach me directly at bk767042@gmail.com.",
        href: "mailto:bk767042@gmail.com",
        icon: "Mail",
      },
    ],
  },

  openGraph: {
    home: {
      role: "Full-Stack Developer",
      description:
        "MERN full-stack development and AI-powered systems from Bilaspur, India.",
    },
    about: {
      subtitle: "About Brijesh",
      description:
        "Full-stack background, experience, and technical skills.",
    },
    projects: {
      subtitle: "Projects",
      description:
        "Full-stack products and AI tools with real benchmarks.",
    },
    contact: {
      subtitle: "Contact",
      description:
        "Open to full-stack roles, collaborations, and freelance work.",
    },
  },

  sections: {
    about: true,
    projects: true,
    contact: true,
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showPrinciples: true,
    showAvailability: true,
    showHeroStats: true,
    projectLabels: {
      live: "Live demo",
      source: "Source code",
    },
  },

  introduction: `
I'm Brijesh Kumar, a MERN full-stack developer from Bilaspur, India, currently working as a research intern at IIT Kharagpur. I build production web applications end to end — React frontends, Node.js and Express APIs, and data layers that hold up under real usage.

My work sits at the intersection of full-stack engineering and applied AI. I've built an AI fact-verification pipeline, a RAG-powered fitness assistant, and a job-search platform that aggregates multiple job boards. I care about measurable results: latency, accuracy, accessibility, and code that stays easy to maintain.

In 2025 I won 1st place at Smart India Hackathon as part of the team behind Prashikshak, a training management platform. I'm open to full-stack and AI engineering roles where I can own features from idea to deployment.
`,

  workExperience: [
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Kharagpur",
      period: "Jan 2026 — Present",
      description:
        "Working on AgentCascade, a testing framework that stress-tests Google's Agent2Agent (A2A) protocol in multi-agent scenarios, supported by automated Python evaluation pipelines.",
      current: true,
    },
    {
      title: "Full-Stack Web Developer Intern",
      company: "Guru Ghasidas Vishwavidyalaya",
      period: "Jan 2025 — Present",
      description:
        "Developing full-stack web applications with React.js and Node.js, integrating REST APIs for reliable data communication across the stack.",
      current: true,
    },
  ],

  education: [
    {
      title: "B.Tech in Information Technology",
      school: "Central University Bilaspur (GGU)",
      info: "CGPA: 7.46 · 2023 — 2027",
      current: true,
    },
  ],

  skills: {
    "Frameworks & Libraries": [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "FastAPI",
      "Redux",
      "Vite",
    ],
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "SQL",
      "C",
    ],
    Databases: ["MongoDB", "Redis", "PostgreSQL", "Pinecone"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "GitLab",
      "Linux",
      "Docker",
      "Postman",
      "CI/CD",
      "Vercel",
      "Render",
      "Clerk",
    ],
    "Soft Skills": [
      "DSA",
      "OOP",
      "Problem Solving",
      "Communication",
      "Leadership",
      "Teamwork",
      "Critical Thinking",
    ],
    Languages: ["English", "Hindi"],
  },
};

export default portfolio;
