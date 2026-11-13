import { marqueeItems } from "../data/portfolio";

export function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <p className="sr-only">{marqueeItems.join(", ")}</p>
      <div className="marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul className="marquee__list" key={copy}>
            {marqueeItems.map((item) => (
              <li key={`${copy}-${item}`}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
