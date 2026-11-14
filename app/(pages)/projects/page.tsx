import { ArrowUpRight, Github } from "lucide-react";

import { getProjects } from "@/app/types/project";
import ProjectGallery from "@/app/components/ui/ProjectGallery";
import portfolio from "@/app/lib/config/portfolio";

export default function Projects() {
  const projects = getProjects();
  const { projectsPage, profile, socials, sections } = portfolio;
  const siteUrl = portfolio.url;
  const github = socials.find((social) => social.icon === "Github");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${profile.name} Projects`,
    description: projectsPage.summary,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${siteUrl}${project.image}`,
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      },
    })),
  };

  return (
    <section
      id="projects"
      className="relative px-4 pb-24 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <header className="max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {projectsPage.title}
          </h1>
          <p className="text-base leading-7 text-white/72 sm:text-lg">
            {projectsPage.summary}
          </p>
        </header>

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
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h2>

                <p className="text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <p className="text-sm leading-6 text-white/55">
                  {project.metric}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
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
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.06]"
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

        {github && (
          <div className="flex sm:justify-end">
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {projectsPage.moreCtaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
