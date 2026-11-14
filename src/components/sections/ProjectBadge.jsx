export default function ProjectBadge({ badge }) {
  const live = badge === "Live";

  return (
    <span
      className={
        live
          ? "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted"
          : "inline-flex items-center gap-1.5 rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-text"
      }
    >
      {live ? (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[var(--success)]"
        />
      ) : null}
      {badge}
    </span>
  );
}
