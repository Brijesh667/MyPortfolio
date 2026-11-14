import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "border border-transparent bg-accent-strong text-white hover:brightness-110",
  secondary:
    "border border-line bg-surface text-fg hover:border-line-strong hover:bg-surface-2",
  ghost: "border border-transparent text-muted hover:text-fg",
};

const sizes = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
};

export default function Button({
  href,
  to,
  external = false,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
