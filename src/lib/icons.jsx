import {
  ArrowRight,
  Atom,
  Briefcase,
  ChevronRight,
  Code2,
  Database,
  Facebook,
  FileCode,
  FileText,
  Frame,
  GitBranch,
  GraduationCap,
  Home,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Server,
  Terminal,
  Triangle,
  Twitter,
  User,
  Wand2,
  Github,
} from "lucide-react";
import { createElement } from "react";

export const iconRegistry = {
  ArrowRight,
  Atom,
  Briefcase,
  ChevronRight,
  Code2,
  Database,
  Facebook,
  FileCode,
  FileText,
  Frame,
  GitBranch,
  Github,
  GraduationCap,
  Home,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Server,
  Terminal,
  Triangle,
  Twitter,
  User,
  Wand2,
};

export function getIcon(name) {
  return iconRegistry[name] ?? Code2;
}

export function Icon({ name, className, ...props }) {
  return createElement(getIcon(name), { className, ...props });
}
