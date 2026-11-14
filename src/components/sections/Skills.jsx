import { skillGroups } from "../../data/skills";
import TechChip from "../ui/TechChip";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { categoryIcons } from "../ui/TechIcon";

export default function Skills() {
  const featured = skillGroups.find((group) => group.featured);
  const groups = skillGroups.filter((group) => !group.featured);
  const FeaturedIcon = categoryIcons[featured.icon];

  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeading
        id="skills-title"
        label="Skills"
        title="Tools I build with"
        description="A practical stack across AI, frontend, backend, and data."
      />

      <Reveal className="relative mt-10 overflow-hidden rounded-2xl border border-accent-border bg-surface p-6 shadow-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-transparent"
        />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent-text">
                <FeaturedIcon aria-hidden="true" className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                {featured.title}
              </h3>
            </div>
            <span className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-text">
              {featured.badge}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.items.map((item) => (
              <TechChip key={item} name={item} highlight />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = categoryIcons[group.icon];
          return (
            <Reveal
              key={group.title}
              delay={(index % 2) * 0.06}
              className={`rounded-2xl border border-line bg-surface p-5 shadow-card transition-transform duration-300 lg:hover:-translate-y-1 ${
                index === groups.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 text-muted">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
                  {group.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechChip key={item} name={item} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
