const images = (slug) =>
  [1, 2, 3, 4].map((n) => ({
    src: `images/projects/${slug}/shot-${n}.webp`,
    alt: `${slug.replace(/-/g, " ")} screenshot ${n}`,
  }));

export const projects = [
  {
    slug: "prashikshak",
    name: "Prashikshak",
    description: "Training Management System",
    badge: "SIH 2025 Winner",
    featured: true,
    liveUrl: "", // Intentionally empty — no live deployment yet.
    githubUrl: "https://github.com/Brijesh667/Prashikshak",
    bullets: [
      "Centralized MERN training portal; won 1st Place at Smart India Hackathon 2025 out of 500+ teams.",
      "REST APIs for role-based access and participant tracking, reducing manual scheduling work by 60%.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    images: images("prashikshak"),
  },
  {
    slug: "sentinels-of-truth",
    name: "Sentinels of Truth",
    description: "AI Fact-Verification Engine",
    badge: "Live",
    liveUrl: "https://sentinels-of-truth-93j9.vercel.app/",
    githubUrl: "https://github.com/Brijesh667/Sentinels_of_Truth",
    // TODO: confirm the 99.00% accuracy figure (resume) vs. the 94/100 note.
    accuracy: "99.00%", // TODO: confirm
    bullets: [
      "AI fact-checking pipeline with an average latency of 11.78 s per claim across 6+ knowledge domains.",
      "Evaluated on 100 diverse factual claims with a reported accuracy of 99.00%.",
    ],
    tech: ["Tavily API", "Gemini", "Pinecone"],
    images: images("sentinels-of-truth"),
  },
  {
    slug: "myfitness",
    name: "MyFitness",
    description: "Full-Stack Fitness Platform",
    badge: "Live",
    liveUrl: "https://my-fitness-full-stack.vercel.app/",
    githubUrl: "https://github.com/Brijesh667/My_Fitness_full_stack",
    bullets: [
      "Mobile-first TypeScript + MERN fitness tracker with 40 REST APIs and 50+ exercises across 13 muscle groups.",
      "RAG diet assistant returning Zod-validated meal plans with source citations; 120-day heatmap and rule-based streak analytics; 14 backend test suites.",
    ],
    tech: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini",
      "Vitest",
    ],
    images: images("myfitness"),
  },
  {
    slug: "applied",
    name: "Applied",
    description: "AI Job Search & Application Tracker",
    badge: "Live",
    liveUrl: "https://applied-tracker.vercel.app/",
    githubUrl: "https://github.com/Brijesh667/Applied",
    bullets: [
      "MERN job-tracking platform with 24 REST APIs, aggregating 6 job boards in parallel with de-duplication and AI match scoring.",
      "React 18 + TanStack Query dashboard with a 14-day deadline ruler, WCAG 2.1 AA accessibility, and 6-hour TTL caching.",
    ],
    tech: [
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "Tailwind CSS",
      "Gemini",
    ],
    images: images("applied"),
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const gridProjects = projects.filter((project) => !project.featured);

export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);
