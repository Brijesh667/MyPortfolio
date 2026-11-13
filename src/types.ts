export type IconName =
  | "sun"
  | "moon"
  | "download"
  | "arrowRight"
  | "arrowUpRight"
  | "github"
  | "linkedin"
  | "mail"
  | "trophy"
  | "monitor"
  | "server"
  | "database"
  | "code"
  | "wrench"
  | "sparkle"
  | "chart"
  | "copy"
  | "file";

export type SectionId = "work" | "experience" | "skills" | "awards" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

export interface HeroContent {
  eyebrow: string;
  titleBefore: string;
  titleEmphasis: string;
  titleAfter: string;
  lead: string;
  stats: Stat[];
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "code";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagAccent?: boolean;
  highlight?: boolean;
  year: string;
  description: string;
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
}

export interface FeaturedProject extends Project {
  metrics: Metric[];
  latency: { label: string; value: string; suffix: string };
  panelStatus: string;
  panelNote: string;
}

export interface MoreProject {
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  linkLabel: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  logo: string;
  dates: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  org: string;
  dates: string;
  cgpa: string;
  cgpaMax: string;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}

export interface Award {
  title: string;
  badge: string;
  description: string;
  icon: IconName;
  featured?: boolean;
}

export interface SectionIntro {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
}

export interface SiteInfo {
  name: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  location: string;
  github: string;
  linkedin: string;
  resumePath: string;
  resumeDownloadName: string;
  footerTagline: string;
}
