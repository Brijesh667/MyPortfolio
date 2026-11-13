import { socials } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

interface SocialIconsProps {
  className?: string;
  labeled?: boolean;
  revealDelay?: number;
}

export function SocialIcons({
  className = "",
  labeled = false,
  revealDelay,
}: SocialIconsProps) {
  const list = (
    <>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            className={labeled ? "social-link" : "social"}
            href={social.href}
            {...(social.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon name={social.icon} />
            {labeled ? social.label : <span className="sr-only">{social.label}</span>}
          </a>
        </li>
      ))}
    </>
  );

  const classes = `socials ${className}`.trim();

  if (typeof revealDelay === "number") {
    return (
      <Reveal as="ul" className={classes} delay={revealDelay} aria-label="Social links">
        {list}
      </Reveal>
    );
  }

  return (
    <ul className={classes} aria-label="Social links">
      {list}
    </ul>
  );
}
