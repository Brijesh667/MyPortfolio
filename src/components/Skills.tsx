import { skillGroups, skillsIntro, skillsNote } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading {...skillsIntro} headingId="skills-title" />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const headingId = `skill-${slugify(group.title)}`;

            return (
              <Reveal
                as="section"
                className="skill-card"
                key={group.title}
                delay={(index % 3) * 60}
                aria-labelledby={headingId}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden="true">
                    <Icon name={group.icon} strokeWidth={1.6} />
                  </span>
                  <h3 id={headingId}>{group.title}</h3>
                </div>

                <ul className="chips">
                  {group.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal as="p" className="skills-note">
          {skillsNote}
        </Reveal>
      </div>
    </section>
  );
}
