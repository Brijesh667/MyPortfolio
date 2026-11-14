import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createElement } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#08090c" : "#f7f7fb");
  }, [theme]);

  // Respect the OS until the visitor makes an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event) => {
      let stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        // ignore
      }
      if (!stored) setTheme(event.matches ? "light" : "dark");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => {
      const next = previous === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return createElement(
    ThemeContext.Provider,
    { value: { theme, toggleTheme } },
    children,
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
