import Reveal from "./Reveal";
import { cn } from "../../lib/cn";

export default function SectionHeading({
  id,
  label,
  title,
  description,
  className,
}) {
  return (
    <Reveal as="header" className={cn("max-w-2xl", className)}>
      {label ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 block h-1 w-10 rounded-full bg-accent"
      />
      {description ? (
        <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
