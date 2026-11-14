export const site = {
  name: "Brijesh Kumar",
  role: "Full-Stack Developer (MERN) | Agentic AI Researcher",
  availability: "Open to internships & full-time opportunities",
  tagline:
    "Full-Stack Developer (MERN) | Agentic AI Researcher @ IIT Kharagpur",
  educationLine: "B.Tech IT (Final Year) · Central University Bilaspur (GGU)",
  intro: "I build full-stack apps with AI built in. SIH 2025 winner.",
  email: "bk767042@gmail.com",
  location: "Bilaspur, India",
  github: "https://github.com/Brijesh667",
  linkedin: "https://www.linkedin.com/in/brijesh-kumar-56093832a",
  resumePath: "resume/Brijesh_Kumar_Resume.pdf",
  photo: "images/profile.webp",
  about: {
    paragraphs: [
      "I'm a final-year B.Tech IT student and MERN full-stack developer. I build web products where AI is part of the experience — from React interfaces to Node APIs and retrieval pipelines.",
      "At [[IIT Kharagpur]], I research [[Agentic AI]] and how multi-agent systems fail. I won [[SIH 2025]] with a training platform built for real programs, and I'm looking for an internship or full-time role where I can build and ship.",
    ],
  },
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
];

export const navSectionIds = navItems.map((item) => item.id);
