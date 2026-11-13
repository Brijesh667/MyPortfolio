import {
  education,
  experienceIntro,
  experiences,
  focusAreas,
  focusNote,
} from "../data/portfolio";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      className="section section--alt"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading {...experienceIntro} headingId="experience-title" />

        <div className="experience__grid">
          <ol className="timeline">
            {experiences.map((experience, index) => (
              <Reveal
                as="li"
                className="timeline__item"
                key={`${experience.org}-${experience.role}`}
                delay={index * 80}
              >
                <div className="exp__top">
                  <div className="exp__heading">
                    <span className="exp__logo" aria-hidden="true">
                      {experience.logo}
                    </span>
                    <div>
                      <h3 className="exp__role">{experience.role}</h3>
                      <p className="exp__org">{experience.org}</p>
                    </div>
                  </div>
                  <span className="date-pill">{experience.dates}</span>
                </div>

                <p className="exp__location">{experience.location}</p>

                <ul className="bullet-list">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>
                      <RichText>{bullet}</RichText>
                    </li>
                  ))}
                </ul>

                <ul className="chips" aria-label="Technologies used">
                  {experience.tech.map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <aside className="experience__aside">
            <Reveal
              className="side-card side-card--edu"
              delay={120}
              aria-label="Education"
            >
              <p className="side-card__label">Education</p>
              <h3 className="side-card__title">{education.degree}</h3>
              <p className="side-card__org">{education.org}</p>
              <div className="side-card__meta">
                <span>{education.dates}</span>
                <span className="cgpa">
                  {education.cgpa} <span>{education.cgpaMax}</span>
                </span>
              </div>
            </Reveal>

            <Reveal className="side-card" delay={180} aria-label="Focus areas">
              <p className="side-card__label">Focus areas</p>
              <ul className="chips">
                {focusAreas.map((area) => (
                  <li className="chip" key={area}>
                    {area}
                  </li>
                ))}
              </ul>
              <p className="side-card__note">{focusNote}</p>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
