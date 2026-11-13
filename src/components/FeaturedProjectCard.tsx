import { featuredProject } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

export function FeaturedProjectCard() {
  const project = featuredProject;

  return (
    <Reveal as="article" className="feature">
      <div className="feature__body">
        <div className="meta-row">
          <span className="tag tag--accent">{project.tag}</span>
          <span className="meta-row__year">{project.year}</span>
        </div>

        <h3 className="feature__title">{project.title}</h3>
        <p className="feature__subtitle">{project.subtitle}</p>
        <p className="feature__desc">{project.description}</p>

        <ul className="bullet-list">
          {project.bullets.map((bullet) => (
            <li key={bullet}>
              <RichText>{bullet}</RichText>
            </li>
          ))}
        </ul>

        <ul className="chips" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="links">
          {project.links.map((link) => (
            <a
              className={`link-arrow${link.kind === "code" ? " link-arrow--muted" : ""}`}
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <Icon
                name="arrowUpRight"
                className="icon icon--sm"
                strokeWidth={1.9}
              />
            </a>
          ))}
        </div>
      </div>

      <aside
        className="feature__panel"
        aria-label={`${project.title} benchmark results`}
      >
        <div className="panel__head">
          <span className="panel__label">Benchmark results</span>
          <span className="panel__status">
            <i aria-hidden="true" />
            {project.panelStatus}
          </span>
        </div>

        <dl className="metrics">
          {project.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>
                {metric.value}
                {metric.suffix ? <span>{metric.suffix}</span> : null}
              </dd>
            </div>
          ))}
        </dl>

        <div className="latency">
          <span className="latency__label">{project.latency.label}</span>
          <span className="latency__value">
            {project.latency.value}
            <span>{project.latency.suffix}</span>
          </span>
        </div>

        <p className="panel__foot">{project.panelNote}</p>
      </aside>
    </Reveal>
  );
}
