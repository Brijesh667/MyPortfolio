import { motion, useReducedMotion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { experiences } from "../../data/experience";
import { cn } from "../../lib/cn";
import { asset } from "../../lib/assets";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import TechChip from "../ui/TechChip";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience" labelledBy="experience-title" soft>
      <SectionHeading
        id="experience-title"
        label="Experience"
        title="Where I've worked"
        description="Research and full-stack engineering, from multi-agent evaluation to shipped web apps."
      />

      <ol className="relative mt-10 space-y-6 border-l border-line pl-6 sm:ml-2 sm:pl-8">
        <motion.span
          aria-hidden="true"
          className="absolute -left-px top-0 h-full w-px origin-top bg-accent"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={reduce ? undefined : { scaleY: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {experiences.map((experience, index) => (
          <Reveal
            as="li"
            key={experience.id}
            delay={index * 0.08}
            className="relative"
          >
            <motion.span
              aria-hidden="true"
              className="absolute -left-[31px] top-7 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[39px]"
              initial={reduce ? false : { scale: 0.5, opacity: 0 }}
              whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.12 }}
            />

            <article
              className={cn(
                "rounded-2xl border bg-surface p-5 shadow-card transition-transform duration-300 sm:p-6 lg:hover:-translate-y-1",
                experience.highlight ? "border-accent-border" : "border-line",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                      {experience.role}
                    </h3>
                    {experience.badge ? (
                      <span className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-text">
                        {experience.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted">{experience.org}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs font-medium text-fg">{experience.period}</p>
                  <p className="mt-0.5 text-xs text-muted">{experience.location}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {experience.bullets.map((bullet) => (
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

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
                {experience.tech.map((tech) => (
                  <TechChip key={tech} name={tech} />
                ))}
              </div>

              {experience.certificate ? (
                <div className="mt-4">
                  <Button
                    href={asset(experience.certificate)}
                    external
                    variant="secondary"
                    size="sm"
                  >
                    <FiFileText aria-hidden="true" className="h-3.5 w-3.5" />
                    View Certificate
                  </Button>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
