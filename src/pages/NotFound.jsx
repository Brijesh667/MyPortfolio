import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../components/ui/Button";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page not found — Brijesh Kumar";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-content flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="font-display text-6xl font-semibold tracking-tight text-accent-text">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
        That page doesn&apos;t exist. It may have moved, or the link may be
        out of date.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button to="/" size="sm">
          <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
          Back home
        </Button>
        <Button to="/#projects" variant="secondary" size="sm">
          View projects
        </Button>
      </div>
      <Link
        to="/#contact"
        className="mt-6 text-xs text-muted underline underline-offset-4 hover:text-fg"
      >
        Or get in touch
      </Link>
    </div>
  );
}
