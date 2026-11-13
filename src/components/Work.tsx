import { moreProject, projects, workIntro } from "../data/portfolio";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { Icon } from "./Icon";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading {...workIntro} headingId="work-title" />

        <FeaturedProjectCard />

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              delay={index * 80}
              key={project.id}
            />
          ))}

          <Reveal as="article" className="project project--more" delay={240}>
            <div className="project__top">
              <span className="meta-row__year">{moreProject.year}</span>
              <span className="tag">{moreProject.tag}</span>
            </div>

            <h3 className="project__title">{moreProject.title}</h3>
            <p className="project__subtitle">{moreProject.subtitle}</p>
            <p className="project__desc">{moreProject.description}</p>

            <div className="links">
              <a
                className="link-arrow"
                href={moreProject.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {moreProject.linkLabel}
                <Icon
                  name="arrowUpRight"
                  className="icon icon--sm"
                  strokeWidth={1.9}
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
