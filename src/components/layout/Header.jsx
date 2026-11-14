import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiFileText, FiMenu, FiX } from "react-icons/fi";
import { navItems, navSectionIds, site } from "../../data/site";
import { asset } from "../../lib/assets";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(navSectionIds);
  const location = useLocation();
  const menuButtonRef = useRef(null);

  const onHome = location.pathname === "/";
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8 md:h-[72px]">
        <Link
          to="/"
          className="rounded font-display text-[15px] font-semibold tracking-tight text-fg sm:text-base"
        >
          Brijesh Kumar
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = onHome && active === item.id;
            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-fg after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={asset(site.resumePath)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface-2 sm:inline-flex"
          >
            <FiFileText aria-hidden="true" className="h-3.5 w-3.5" />
            View Resume
            <FiArrowUpRight aria-hidden="true" className="h-3 w-3 text-muted" />
          </a>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-line-strong hover:bg-surface-2 md:hidden"
          >
            {menuOpen ? (
              <FiX aria-hidden="true" className="h-4 w-4" />
            ) : (
              <FiMenu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        returnFocusRef={menuButtonRef}
      />
    </header>
  );
}
