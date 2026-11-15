import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import MagneticWrapper from "../animations/MagneticWrapper";
import { assetPath } from "../../lib/assets";
import { cn } from "../../lib/cn";
import portfolio from "../../data/portfolio";
import { Icon } from "../../lib/icons";

const navItems = portfolio.navigation;
const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 px-1.5 sm:bottom-auto sm:top-4 sm:px-4"
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-1 overflow-x-auto rounded-2xl bg-[#0a0a0a]/95 px-2 py-2.5 sm:justify-center sm:gap-2 sm:rounded-full sm:bg-black/45 sm:px-3 sm:py-2.5 sm:shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:backdrop-blur-xl">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <MagneticWrapper key={item.href} strength={0.12}>
              <a
                href={`${assetPath("/")}${item.href}`}
                onClick={() => setActiveSection(id)}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-4 py-3 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm md:text-base",
                  "hover:bg-white/5",
                  isActive
                    ? "bg-white/16 text-white"
                    : "text-zinc-300 hover:text-white",
                )}
              >
                <Icon name={item.icon} className="h-6 w-6 sm:h-4 sm:w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            </MagneticWrapper>
          );
        })}
      </div>
    </motion.nav>
  );
}
