import { cn } from "../../lib/cn";

export default function Section({
  id,
  labelledBy,
  className,
  children,
  soft = false,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 md:py-24", soft && "bg-bg-soft", className)}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        {children}
      </div>
    </section>
  );
}
