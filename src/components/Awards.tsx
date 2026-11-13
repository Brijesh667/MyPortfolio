import { awards, awardsIntro } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  return (
    <section
      className="section section--alt"
      id="awards"
      aria-labelledby="awards-title"
    >
      <div className="container">
        <SectionHeading {...awardsIntro} headingId="awards-title" />

        <div className="awards-grid">
          {awards.map((award, index) => (
            <Reveal
              as="article"
              className={`award${award.featured ? " award--gold" : ""}`}
              key={award.title}
              delay={index * 80}
            >
              <div className="award__top">
                <span
                  className={`award__icon${award.featured ? "" : " award__icon--plain"}`}
                  aria-hidden="true"
                >
                  <Icon name={award.icon} strokeWidth={1.5} />
                </span>
                <span
                  className={`award__badge${award.featured ? "" : " award__badge--plain"}`}
                >
                  {award.badge}
                </span>
              </div>

              <h3 className="award__title">{award.title}</h3>
              <p className="award__desc">{award.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
