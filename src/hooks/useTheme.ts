import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return current === "light" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#08090b" : "#f7f6f1");
  }, [theme]);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        // Storage may be unavailable in private modes.
      }

      if (!stored) setTheme(event.matches ? "light" : "dark");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === "dark" ? "light" : "dark";

      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage may be unavailable in private modes.
      }

      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
