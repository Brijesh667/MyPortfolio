import type { Project } from "../types";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal
      as="article"
      className={`project${project.highlight ? " project--award" : ""}`}
      delay={delay}
    >
      <div className="project__top">
        <span className="meta-row__year">{project.year}</span>
        <span className={`tag${project.tagAccent ? " tag--accent" : ""}`}>
          {project.tag}
        </span>
      </div>

      <h3 className="project__title">{project.title}</h3>
      <p className="project__subtitle">{project.subtitle}</p>
      <p className="project__desc">{project.description}</p>

      <ul className="bullet-list bullet-list--sm">
        {project.bullets.map((bullet) => (
          <li key={bullet}>
            <RichText>{bullet}</RichText>
          </li>
        ))}
      </ul>

      <ul className="chips" aria-label="Technologies used">
        {project.tech.map((tech) => (
          <li className="chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      <div className="links">
        {project.links.map((link) => (
          <a
            className={`link-arrow${link.kind === "code" ? " link-arrow--muted" : ""}`}
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <Icon
              name="arrowUpRight"
              className="icon icon--sm"
              strokeWidth={1.9}
            />
          </a>
        ))}
      </div>
    </Reveal>
  );
}
