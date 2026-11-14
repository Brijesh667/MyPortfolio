import { FaGraduationCap } from "react-icons/fa";
import { education } from "../../data/education";
import Chip from "../ui/Chip";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title" soft>
      <SectionHeading
        id="education-title"
        label="Education"
        title="Academic foundation"
      />

      <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-text">
              <FaGraduationCap aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg sm:text-xl">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">{education.org}</p>
            </div>
          </div>
          <span className="rounded-full border border-accent-border bg-accent-soft px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-text">
            {education.status}
          </span>
        </div>

        <p className="mt-5 text-sm text-muted">{education.years}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {education.subjects.map((subject) => (
            <Chip key={subject}>{subject}</Chip>
          ))}
        </div>

        <ul className="mt-6 space-y-2 border-t border-line pt-5">
          {education.bullets.map((bullet) => (
            <li key={bullet.label} className="text-sm leading-6 text-muted">
              <span className="font-medium text-fg">{bullet.label}:</span>{" "}
              {bullet.text}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
