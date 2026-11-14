import { IconName } from "@/app/lib/icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  metric: string;
  image: string;
  gallery?: string[];
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconName;
}

export interface GeoConfig {
  city: string;
  country: string;
  countryCode?: string;
}

export interface ProfileConfig {
  name: string;
  role: string;
  location: string;
}

export interface ContactConfig {
  email: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface EducationItem {
  title: string;
  school: string;
  period: string;
  cgpa?: string;
}

export interface AchievementItem {
  title: string;
  subtext: string;
}

export interface WorkExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface CtaItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface SeoConfig {
  title: string;
  titleTemplate: string;
  description: string;
  applicationName?: string;
  keywords?: string[];
  sameAs?: string[];
  googleVerification?: string;
  image?: string;
}

export interface OpenGraphCopy {
  role?: string;
  subtitle?: string;
  description: string;
}

export interface SectionsConfig {
  projectLabels: {
    live: string;
    source: string;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ImagesConfig {
  hero: string;
  gallery: GalleryImage[];
}

export interface AboutPageConfig {
  experienceTitle: string;
  educationTitle: string;
  achievementsTitle: string;
  skillsTitle: string;
  dsaNote: string;
}

export interface ContactPageConfig {
  title: string;
  intro: string;
}

export type { IconName } from "@/app/lib/icons";

export interface PortfolioConfig {
  url: string;
  profile: ProfileConfig;
  geo: GeoConfig;
  images: ImagesConfig;
  seo: SeoConfig;
  analytics?: {
    umamiId?: string;
  };
  contact: ContactConfig;
  socials: SocialLink[];
  resumeUrl: string;
  hero: {
    heading: string;
    subtitle: string;
    primaryCta: CtaItem;
    resumeCta: CtaItem;
  };
  heroStats: HeroStat[];
  home: {
    projectsTitle: string;
  };
  navigation: NavItem[];
  footer: {
    copyright: string;
  };
  projects: Project[];
  aboutPage: AboutPageConfig;
  contactPage: ContactPageConfig;
  openGraph: {
    home: OpenGraphCopy;
  };
  sections: SectionsConfig;
  introduction: string;
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  skills: Record<string, string[]>;
}
