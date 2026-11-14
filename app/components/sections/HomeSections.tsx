"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

import { getFeaturedProjects } from "@/app/types/project";
import ProjectGallery from "@/app/components/ui/ProjectGallery";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function HomeSections() {
  const featuredProjects = getFeaturedProjects();
  const { home, principles, sections } = portfolio;
  const liveLabel = sections.projectLabels.live;
  const sourceLabel = sections.projectLabels.source;

  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 pb-4 sm:space-y-24 sm:px-6 sm:pb-8 lg:space-y-36">
      <section className="rounded-[1.75rem] bg-white/[0.025] p-5 sm:rounded-[2rem] sm:p-8 sm:shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:p-10">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {home.principlesTitle}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {home.principlesDescription}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {principles.map((card, index) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl bg-white/[0.035] p-5 transition-colors hover:bg-white/[0.055] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/[0.06] p-2.5 sm:p-3">
                    <Icon name={card.icon} className="h-4 w-4 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/68 sm:mt-4 sm:leading-7">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-10">
          <Link
            href={home.aboutCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            {home.aboutCta.label}
            <Icon name={home.aboutCta.icon} className="h-4 w-4" />
          </Link>
          <Link
            href={home.projectsCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1] sm:px-5"
          >
            {home.projectsCta.label}
            <Icon name={home.projectsCta.icon} className="h-4 w-4 text-brand-signal" />
          </Link>
        </div>
      </section>

      <section className="space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            {home.workTitle}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72">
            {home.workDescription}
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white/[0.03] transition-transform duration-300 sm:rounded-[2rem] sm:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-white/3">
                <ProjectGallery
                  images={project.gallery ?? [project.image]}
                  alt={project.title}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-8">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-white/70 sm:leading-7">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
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
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-brand-primary transition-opacity hover:opacity-80"
                    >
                      {liveLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-white/72 transition-opacity hover:opacity-90"
                    >
                      <Github className="h-4 w-4" />
                      {sourceLabel}
                    </Link>
                  )}
                  <Link
                    href="/projects"
                    className="ml-auto inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-white/60 transition-opacity hover:opacity-90"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

