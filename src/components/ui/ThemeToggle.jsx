import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-line-strong hover:bg-surface-2 ${className}`}
    >
      {theme === "dark" ? (
        <FiSun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <FiMoon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
}
