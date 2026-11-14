import { cn } from "../../lib/cn";

export default function Chip({
  icon: Icon,
  iconProps,
  children,
  highlight = false,
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs leading-none transition-transform duration-200 lg:hover:-translate-y-0.5",
        highlight
          ? "border-accent-border bg-accent-soft text-fg"
          : "border-line bg-surface text-muted lg:hover:border-line-strong",
        className,
      )}
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className={cn(
            "h-3.5 w-3.5",
            highlight ? "text-accent-text" : "text-muted",
          )}
          {...iconProps}
        />
      ) : null}
      <span>{children}</span>
    </span>
  );
}
