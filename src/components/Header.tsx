import { useEffect, useRef, useState } from "react";
import { navItems, sectionOrder, site } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import type { SectionId } from "../types";
import { Icon } from "./Icon";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | "">("");
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(y > 8);

      if (progressRef.current) {
        const progress = scrollable > 0 ? Math.min(y / scrollable, 1) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const marker = y + 140;
      let current: SectionId | "" = "";

      sectionOrder.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector<HTMLElement>(".site-footer");

    if (menuRef.current) menuRef.current.inert = !menuOpen;
    if (main) main.inert = menuOpen;
    if (footer) footer.inert = menuOpen;

    document.body.classList.toggle("nav-open", menuOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const timer = window.setTimeout(() => {
      const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus({ preventScroll: true });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus({ preventScroll: true });
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span className="progress__bar" ref={progressRef} />
      </div>

      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        id="siteHeader"
        ref={headerRef}
      >
        <div className="container header__inner">
          <a className="brand" href="#top">
            <span className="brand__mark" aria-hidden="true">
              BK
            </span>
            <span className="brand__text">
              Brijesh<span className="brand__dot">.</span>Kumar
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav__link${active === item.id ? " is-active" : ""}`}
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              className="icon-btn theme-toggle"
              id="themeToggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${nextTheme} theme`}
              title={`Switch to ${nextTheme} theme`}
            >
              <Icon name="sun" className="icon icon--sun" />
              <Icon name="moon" className="icon icon--moon" />
            </button>

            <a
              className="btn btn--ghost header__resume"
              href={site.resumePath}
              download={site.resumeDownloadName}
            >
              Résumé
              <Icon name="download" className="icon icon--sm" />
            </a>

            <button
              className="menu-toggle"
              id="menuToggle"
              type="button"
              ref={menuToggleRef}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mobile-menu" id="mobileMenu" ref={menuRef}>
          <nav aria-label="Mobile">
            <ul className="mobile-menu__list">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                    {item.label}
                    <span aria-hidden="true">0{index + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <a
              className="btn btn--primary"
              href={site.resumePath}
              download={site.resumeDownloadName}
            >
              Download résumé
            </a>
            <SocialIcons className="socials--menu" />
          </div>
        </div>
      </header>
    </>
  );
}
