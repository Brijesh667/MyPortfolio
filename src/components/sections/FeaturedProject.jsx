import { Link } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";
import Reveal from "../ui/Reveal";
import ProjectActions from "./ProjectActions";
import ProjectBadge from "./ProjectBadge";

export default function FeaturedProject({ project }) {
  return (
    <Reveal
      as="article"
      className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[var(--accent-soft)] via-surface to-surface p-4 shadow-card sm:p-6"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <ImageSlider
          images={project.images}
          label={`${project.name} screenshots`}
          autoAdvance={3000}
          rounded="rounded-2xl"
        />

        <div className="px-1 pb-2 lg:px-2">
          <div className="flex flex-wrap items-center gap-2">
            <ProjectBadge badge={project.badge} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              Featured
            </span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent-text"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted">{project.description}</p>

          <ul className="mt-5 space-y-2.5">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-4 text-sm leading-6 text-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.6rem] h-1 w-1 rounded-full bg-accent"
                />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-2.5 py-1.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <ProjectActions project={project} className="mt-6" size="md" />
        </div>
      </div>
    </Reveal>
  );
}
