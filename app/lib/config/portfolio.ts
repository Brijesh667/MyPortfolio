import type { PortfolioConfig } from "@/app/types";

const portfolio: PortfolioConfig = {
  url: "https://brijesh667.github.io/MyPortfolio",

  profile: {
    name: "Brijesh Kumar",
    role: "Full-Stack Developer",
    availability: "Open to full-stack and AI roles.",
    location: "Bilaspur, India",
  },

  geo: {
    city: "Bilaspur",
    country: "India",
    countryCode: "IN",
  },

  images: {
    hero: "/images/brijesh-profile.webp",
    seoFallback: "/images/brijesh-profile.webp",
    gallery: [
      { src: "/images/brijesh-profile.webp", alt: "Brijesh Kumar portrait" },
      { src: "/images/iitkgp-1.webp", alt: "IIT Kharagpur campus building" },
      { src: "/images/iitkgp-2.webp", alt: "Brijesh Kumar at IIT Kharagpur" },
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
      "Brijesh Kumar — MERN full-stack developer and research intern at IIT Kharagpur. SIH 2025 winner. Projects in AI fact-checking, job search and fitness tracking.",
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
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Brijesh667",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brijesh-kumar-56093832a",
      icon: "Linkedin",
    },
    {
      name: "Email",
      href: "mailto:bk767042@gmail.com",
      icon: "Mail",
    },
  ],

  resumeUrl: "/resume.pdf",

  hero: {
    heading: "Hi, I'm Brijesh.",
    subtitle:
      "Full-stack developer (MERN) and research intern at IIT Kharagpur. I build web apps and AI tools, and I measure whether they actually work.",
    primaryCta: { label: "View projects", href: "/projects", icon: "ArrowRight" },
    resumeCta: { label: "Resume", href: "/resume.pdf", icon: "FileText" },
    contactCta: { label: "Contact", href: "/contact" },
  },

  heroStats: [
    { value: "SIH 2025", label: "1st place, 500+ teams" },
    { value: "IIT Kharagpur", label: "Research intern" },
    { value: "4", label: "Projects" },
  ],

  home: {
    projectsTitle: "Projects",
    allProjectsLabel: "All projects",
  },

  navigation: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "User" },
    { label: "Projects", href: "/projects", icon: "Briefcase" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],

  footer: {
    copyright: "Brijesh Kumar",
  },

  projects: [
    {
      id: "1",
      title: "Sentinels of Truth",
      description:
        "Checks factual claims by searching the web and comparing them with a knowledge base. Covers 6+ topic areas.",
      metric: "99.00% accuracy on 100 claims · ~11.8 s per claim",
      image: "/projects/sentinels-1.webp",
      gallery: [
        "/projects/sentinels-1.webp",
        "/projects/sentinels-2.webp",
        "/projects/sentinels-3.webp",
      ],
      tags: ["Tavily API", "Gemini 3.8 Flash Lite", "Pinecone", "React", "Node.js"],
      liveUrl: "https://sentinels-of-truth-93j9.vercel.app",
      githubUrl: "https://github.com/Brijesh667/Sentinels_of_Truth",
      featured: true,
    },
    {
      id: "2",
      title: "Applied",
      description:
        "Job search and application tracker. Pulls listings from 6 job boards at once, removes duplicates and scores how well each job matches you.",
      metric: "24 REST APIs · 6-hour cache so repeat searches are instant",
      image: "/projects/applied-1.webp",
      gallery: [
        "/projects/applied-1.webp",
        "/projects/applied-2.webp",
        "/projects/applied-3.webp",
        "/projects/applied-4.webp",
      ],
      tags: [
        "React",
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
        "Mobile-first workout tracker with 50+ exercises across 13 muscle groups, streaks, a 120-day heatmap and an AI diet assistant that cites its sources.",
      metric: "40 REST APIs · 14 backend test suites",
      image: "/projects/fitness-1.webp",
      gallery: [
        "/projects/fitness-1.webp",
        "/projects/fitness-2.webp",
        "/projects/fitness-3.webp",
        "/projects/fitness-4.webp",
      ],
      tags: [
        "React",
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
        "Training management portal with role-based access, scheduling and participant tracking. Winner of Smart India Hackathon 2025 (1st of 500+ teams).",
      metric: "Cut manual scheduling work by 60%",
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
    title: "Projects",
    summary:
      "Four projects: two AI tools, a fitness tracker and my SIH-winning portal.",
    moreCtaLabel: "More on GitHub",
  },

  aboutPage: {
    experienceTitle: "Work Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    dsaNote:
      "250+ DSA problems solved in C++ (LeetCode + GeeksforGeeks).",
  },

  contactPage: {
    title: "Contact",
    intro:
      "Email is the fastest way to reach me. I'm open to full-stack and AI roles.",
  },

  openGraph: {
    home: {
      role: "Full-Stack Developer",
      description:
        "MERN full-stack developer and research intern at IIT Kharagpur. SIH 2025 winner.",
    },
    about: {
      subtitle: "About Brijesh",
      description: "Background, experience, education and skills.",
    },
    projects: {
      subtitle: "Projects",
      description:
        "AI fact-checking, job search, fitness tracking and a SIH-winning portal.",
    },
    contact: {
      subtitle: "Contact",
      description: "Email, resume, GitHub and LinkedIn.",
    },
  },

  sections: {
    projectLabels: {
      live: "Live",
      source: "Code",
    },
  },

  introduction: `
I'm a final-year B.Tech IT student at Central University Bilaspur, working as a research intern at IIT Kharagpur. I build full-stack apps with React, Node.js and MongoDB, and I'm interested in applied AI.

In 2025 my team won 1st place at Smart India Hackathon with Prashikshak, a training management portal. I'm looking for full-stack or AI engineering roles.
`,

  workExperience: [
    {
      title: "Research Intern",
      company: "IIT Kharagpur",
      period: "Jan 2026 — Present",
      bullets: [
        "Built AgentCascade, a framework that stress-tests Google's Agent2Agent (A2A) protocol.",
        "Ran reproducible experiments on 3 network topologies (chain, star, mesh) to find where agent communication fails.",
        "Automated the evaluation pipeline in Python, making benchmark runs 40% faster.",
      ],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Guru Ghasidas Vishwavidyalaya",
      period: "Jan 2025 — Present",
      bullets: [
        "Built web apps with React.js and Node.js and connected them through REST APIs.",
      ],
    },
  ],

  education: [
    {
      title: "B.Tech, Information Technology",
      school: "Central University Bilaspur (GGU)",
      info: "2023–2027 · CGPA 7.46",
    },
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
    "Frontend & Backend": [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind CSS",
    ],
    Databases: ["MongoDB", "PostgreSQL", "Redis", "Pinecone"],
    Tools: ["Git", "GitHub", "Docker", "Postman", "Linux", "Vercel"],
  },
};

export default portfolio;
