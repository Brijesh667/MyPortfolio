import * as LucideIcons from "lucide-react";
import { Briefcase, Code2, GraduationCap, MapPin } from "lucide-react";

import PhotoCarousel from "@/app/components/ui/PhotoCarousel";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

const skillIcons = {
  JavaScript: LucideIcons.Braces,
  TypeScript: LucideIcons.FileCode,
  Python: LucideIcons.Code2,
  "C++": LucideIcons.Code2,
  SQL: LucideIcons.Database,
  React: LucideIcons.Atom,
  "Next.js": LucideIcons.Triangle,
  "Node.js": LucideIcons.Server,
  Express: LucideIcons.Rocket,
  FastAPI: LucideIcons.Zap,
  "Tailwind CSS": LucideIcons.Palette,
  MongoDB: LucideIcons.Database,
  PostgreSQL: LucideIcons.Database,
  Redis: LucideIcons.Database,
  Pinecone: LucideIcons.Boxes,
  Git: LucideIcons.GitBranch,
  GitHub: LucideIcons.Github,
  Docker: LucideIcons.Container,
  Postman: LucideIcons.Send,
  Linux: LucideIcons.Terminal,
  Vercel: LucideIcons.Triangle,
};

export default function About() {
  const {
    profile,
    images,
    socials,
    introduction,
    workExperience,
    education,
    skills,
    aboutPage,
  } = portfolio;

  return (
    <section id="about" className="px-4 pb-24 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[340px_1fr]">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <div className="section-shell p-5 sm:p-6">
            <div className="mx-auto w-full max-w-56 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 sm:max-w-60">
              <PhotoCarousel
                images={images.gallery}
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 240px, 60vw"
                priority
              />
            </div>

            <div className="mt-5 space-y-2 text-center sm:mt-6">
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {profile.name}
              </h1>
              <p className="text-sm text-white/68">{profile.role}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 text-brand-signal" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socials.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm text-white/84 transition-colors hover:border-white/18 hover:bg-white/6"
              >
                <span>{link.name}</span>
                <Icon name={link.icon} className="h-4 w-4 text-brand-primary" />
              </a>
            ))}
          </div>
        </aside>

        <div className="space-y-8 sm:space-y-10">
          <section className="section-shell p-5 sm:p-8">
            <div className="space-y-4 text-base leading-7 text-white/75">
              {introduction
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <section className="section-shell p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-brand-primary" />
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {aboutPage.experienceTitle}
                </h2>
              </div>

              <div className="relative mt-6 space-y-4 pl-6">
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-[5px] top-4 w-px bg-white/12"
                />
                {workExperience.map((job) => (
                  <article
                    key={job.title}
                    className="relative rounded-2xl bg-white/3 p-4 sm:p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.45rem] top-6 h-2.5 w-2.5 rounded-full bg-white/35"
                    />
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {job.title}
                        </p>
                        <p className="mt-0.5 text-sm text-white/65">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-xs text-white/50">{job.period}</span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-6 text-white/70 marker:text-white/30">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-shell p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-brand-signal" />
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {aboutPage.educationTitle}
                </h2>
              </div>

              {education.map((item) => (
                <p
                  key={item.title}
                  className="mt-5 text-base leading-7 text-white/78"
                >
                  <span className="font-semibold text-white">{item.title}</span>
                  {" — "}
                  {item.school}
                  {item.info ? ` · ${item.info}` : ""}
                </p>
              ))}
            </section>
          </div>

          <section className="section-shell p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-brand-primary" />
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {aboutPage.skillsTitle}
              </h2>
            </div>

            <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {category}
                    </h3>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const SkillIcon =
                        skillIcons[skill as keyof typeof skillIcons] ||
                        LucideIcons.Code2;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5"
                        >
                          <SkillIcon className="h-3.5 w-3.5 text-brand-primary" />
                          <span className="text-sm font-medium text-white/85">
                            {skill}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-white/55">{aboutPage.dsaNote}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
