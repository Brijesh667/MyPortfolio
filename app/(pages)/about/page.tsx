"use client";

import * as LucideIcons from "lucide-react";
import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Tooltip from "@/app/components/ui/Tooltip";
import PhotoCarousel from "@/app/components/ui/PhotoCarousel";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

const skillIcons = {
  "React.js": LucideIcons.Atom,
  "Next.js": LucideIcons.Triangle,
  TypeScript: LucideIcons.FileCode,
  JavaScript: LucideIcons.Braces,
  "Tailwind CSS": LucideIcons.Palette,
  "Node.js": LucideIcons.Server,
  "Express.js": LucideIcons.Rocket,
  FastAPI: LucideIcons.Zap,
  Redux: LucideIcons.Workflow,
  Vite: LucideIcons.Zap,
  MongoDB: LucideIcons.Database,
  Redis: LucideIcons.Database,
  PostgreSQL: LucideIcons.Database,
  Pinecone: LucideIcons.Boxes,
  Python: LucideIcons.Code2,
  "C++": LucideIcons.Code2,
  SQL: LucideIcons.Database,
  C: LucideIcons.Code2,
  Git: LucideIcons.GitBranch,
  GitHub: LucideIcons.Github,
  GitLab: LucideIcons.Gitlab,
  Linux: LucideIcons.Terminal,
  Docker: LucideIcons.Container,
  Postman: LucideIcons.Send,
  "CI/CD": LucideIcons.Workflow,
  Vercel: LucideIcons.Triangle,
  Render: LucideIcons.Cloud,
  Clerk: LucideIcons.ShieldCheck,
  DSA: LucideIcons.Binary,
  OOP: LucideIcons.Boxes,
  "Problem Solving": LucideIcons.Lightbulb,
  Communication: LucideIcons.MessageCircle,
  Leadership: LucideIcons.Users,
  Teamwork: LucideIcons.Users,
  "Critical Thinking": LucideIcons.Brain,
  English: LucideIcons.Languages,
  Hindi: LucideIcons.Languages,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
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
    <section id="about" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-shell p-5 sm:p-6"
          >
            <div className="mx-auto w-full max-w-60 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
              <PhotoCarousel
                images={images.gallery}
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 240px, 60vw"
                priority
              />
            </div>

            <div className="mt-6 space-y-3 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                {aboutPage.profileBadge}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="text-sm text-white/68">{profile.role}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 text-brand-signal" />
                <span>{profile.location}</span>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {socials.map((link) => {
              return (
                <Tooltip key={link.name} content={link.tooltip ?? ""}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm text-white/84 transition-colors hover:border-white/18 hover:bg-white/6"
                  >
                    <span>{link.name}</span>
                    <Icon name={link.icon} className="h-4 w-4 text-brand-primary" />
                  </a>
                </Tooltip>
              );
            })}
          </motion.div>
        </aside>

        <div className="space-y-12">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-shell p-6 sm:p-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="h-px w-10 bg-(--brand-primary)" />
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                {aboutPage.introductionTitle}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 space-y-4 text-base leading-7 text-white/75 sm:text-lg"
            >
              {introduction
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </motion.div>
          </motion.section>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="section-shell p-6 sm:p-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Briefcase className="h-5 w-5 text-brand-primary" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {aboutPage.experienceTitle}
                </h2>
              </motion.div>

              <div className="relative mt-6 space-y-5 pl-8">
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-[7px] top-6 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.65))]"
                />
                {workExperience.map((job) => {
                  const isCurrent = job.current ?? job.period.includes("Present");

                  return (
                  <motion.article
                    key={job.title}
                    variants={itemVariants}
                    className="relative rounded-2xl bg-white/3 p-5 transition-colors hover:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[2.05rem] flex h-4 w-4 items-center justify-center ${
                        isCurrent ? "top-6" : "top-4"
                      }`}
                    >
                      {isCurrent && (
                        <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-primary/55" />
                      )}
                      <span
                        className={`relative h-3 w-3 rounded-full ${
                          isCurrent
                            ? "bg-brand-primary shadow-[0_0_14px_rgba(91,124,255,0.9)]"
                            : "bg-white/35"
                        }`}
                      />
                    </span>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {job.title}
                        </p>
                        <p className="mt-1 text-sm text-white/65">
                          {job.company}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
                      {job.description}
                    </p>
                  </motion.article>
                  );
                })}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="section-shell p-6 sm:p-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <GraduationCap className="h-5 w-5 text-brand-signal" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {aboutPage.educationTitle}
                </h2>
              </motion.div>

              <div className="relative mt-6 space-y-3 pl-8">
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-[7px] top-6 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.16))]"
                />
                {education.map((item) => {
                  const isCurrent = item.current ?? false;

                  return (
                  <motion.article
                    key={item.title}
                    variants={itemVariants}
                    className="relative rounded-2xl bg-white/3 p-5 transition-colors hover:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.05rem] top-4 flex h-4 w-4 items-center justify-center"
                    >
                      {isCurrent && (
                        <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-primary/55" />
                      )}
                      <span
                        className={`relative h-3 w-3 rounded-full ${
                          isCurrent
                            ? "bg-brand-primary shadow-[0_0_14px_rgba(91,124,255,0.9)]"
                            : "bg-white/35"
                        }`}
                      />
                    </span>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-white/65">
                          {item.school}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-white/60">
                        {item.info}
                      </span>
                    </div>
                  </motion.article>
                  );
                })}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-shell p-6 sm:p-8"
          >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Code2 className="h-5 w-5 text-brand-primary" />
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {aboutPage.skillsTitle}
                </h2>
              </motion.div>

            <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {category}
                    </h3>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const Icon =
                        skillIcons[skill as keyof typeof skillIcons] ||
                        LucideIcons.Code2;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3.5 py-2 transition-colors hover:border-white/16 hover:bg-white/[0.07]"
                        >
                          <Icon className="h-3.5 w-3.5 text-brand-primary" />
                          <span className="text-sm font-medium text-white/85">
                            {skill}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

