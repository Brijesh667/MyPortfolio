import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  headingId: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  headingId,
}: SectionHeadingProps) {
  return (
    <Reveal as="header" className="section-head">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span> {eyebrow}
      </p>
      <h2 className="section-title" id={headingId}>
        {title}
      </h2>
      <p className="section-lead">{lead}</p>
    </Reveal>
  );
}
