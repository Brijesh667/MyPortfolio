import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

import { getFeaturedProjects } from "@/app/types/project";
import ProjectGallery from "@/app/components/ui/ProjectGallery";
import portfolio from "@/app/lib/config/portfolio";

export default function HomeSections() {
  const projects = getFeaturedProjects();
  const { home, sections } = portfolio;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-8">
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {home.projectsTitle}
        </h2>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white/[0.03] sm:rounded-[2rem] sm:shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-white/3">
                <ProjectGallery
                  images={project.gallery ?? [project.image]}
                  alt={project.title}
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 sm:p-8">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-brand-primary transition-opacity hover:opacity-80"
                    >
                      {sections.projectLabels.live}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-white/72 transition-opacity hover:opacity-90"
                    >
                      <Github className="h-4 w-4" />
                      {sections.projectLabels.source}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          {home.allProjectsLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
