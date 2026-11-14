import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { navItems, site } from "../../data/site";

export default function Footer() {
  const backToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto flex w-full max-w-content flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted">
          © 2026 {site.name}
          <span className="mx-2 text-line-strong">·</span>
          Built with React
        </p>

        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className="text-xs text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={backToTop}
          className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-fg md:self-auto"
        >
          Back to top
          <FiArrowUp aria-hidden="true" className="h-3 w-3" />
        </button>
      </div>
    </footer>
  );
}
