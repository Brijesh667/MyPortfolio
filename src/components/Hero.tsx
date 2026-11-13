import { hero, site } from "../data/portfolio";
import { Icon } from "./Icon";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SocialIcons } from "./SocialIcons";
import { TopologyVisual } from "./TopologyVisual";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow eyebrow--badge">
            <span className="eyebrow__dot" aria-hidden="true" />
            {hero.eyebrow}
          </Reveal>

          <Reveal as="h1" className="hero__title" id="hero-title" delay={60}>
            {hero.titleBefore} <em>{hero.titleEmphasis}</em> {hero.titleAfter}
          </Reveal>

          <Reveal as="p" className="hero__lead" delay={120}>
            {hero.lead}
          </Reveal>

          <Reveal className="hero__cta" delay={180}>
            <a className="btn btn--primary" href="#work">
              Explore my work
              <Icon
                name="arrowRight"
                className="icon icon--sm"
                strokeWidth={1.9}
              />
            </a>
            <a
              className="btn btn--secondary"
              href={site.resumePath}
              download={site.resumeDownloadName}
            >
              <Icon name="download" className="icon icon--sm" />
              Download résumé
            </a>
          </Reveal>

          <SocialIcons className="hero__socials" revealDelay={240} />

          <Reveal as="dl" className="hero__stats" delay={300}>
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={200}>
          <TopologyVisual />
        </Reveal>
      </div>

      <Marquee />
    </section>
  );
}
