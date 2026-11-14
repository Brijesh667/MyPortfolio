import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";

export default function ProjectActions({ project, className, size = "sm" }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {project.liveUrl ? (
        <Button href={project.liveUrl} external size={size}>
          View Live Demo
          <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Button>
      ) : null}

      <Button to={`/projects/${project.slug}`} variant="secondary" size={size}>
        View Details
        <FiArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
      </Button>

      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
        >
          <FiGithub aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
