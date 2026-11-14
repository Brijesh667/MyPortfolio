import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { navItems, site } from "../../data/site";
import { asset } from "../../lib/assets";

export default function MobileMenu({ open, onClose, returnFocusRef }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    if (footer) footer.inert = true;

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector("a")?.focus({ preventScroll: true });
    }, 30);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        returnFocusRef.current?.focus({ preventScroll: true });
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return createPortal(
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-0 top-16 z-40 bg-black/40"
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        className="fixed inset-x-0 top-16 z-40 border-b border-line bg-bg px-5 pb-6 pt-3 shadow-card"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 text-base text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={asset(site.resumePath)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white"
        >
          <FiFileText aria-hidden="true" className="h-4 w-4" />
          View Resume
          <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>,
    document.body,
  );
}
