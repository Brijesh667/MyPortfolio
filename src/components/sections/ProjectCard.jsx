import { Link } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";
import Reveal from "../ui/Reveal";
import ProjectActions from "./ProjectActions";
import ProjectBadge from "./ProjectBadge";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex flex-col rounded-2xl border border-line bg-surface p-4 shadow-card transition duration-300 hover:border-accent-border lg:hover:-translate-y-1"
    >
      <ImageSlider
        images={project.images}
        label={`${project.name} screenshots`}
        autoAdvance={3000}
      />

      <div className="flex flex-1 flex-col px-1 pt-4">
        <ProjectBadge badge={project.badge} />

        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-fg">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent-text"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.bullets.slice(0, 2).map((bullet) => (
            <li
              key={bullet}
              className="relative pl-4 text-xs leading-5 text-muted"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.5rem] h-1 w-1 rounded-full bg-accent"
              />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface-2 px-2 py-1 text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <ProjectActions project={project} className="mt-auto pt-5" size="xs" />
      </div>
    </Reveal>
  );
}
