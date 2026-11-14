import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "accent-border": "var(--accent-border)",
        "accent-text": "var(--accent-text)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
        prose: "750px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.06), 0 18px 50px -28px rgba(0,0,0,.5)",
        lift: "0 2px 4px rgba(0,0,0,.08), 0 26px 60px -28px rgba(0,0,0,.55)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [typography],
};
