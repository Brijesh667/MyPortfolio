import { FiGithub, FiLinkedin } from "react-icons/fi";
import { socials } from "../../data/site";

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`} aria-label="Social links">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
