/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "hsl(0 0% 96%)",
        card: "hsl(0 0% 6%)",
        "card-foreground": "hsl(0 0% 96%)",
        popover: "hsl(0 0% 6%)",
        "popover-foreground": "hsl(0 0% 96%)",
        primary: "hsl(0 0% 90%)",
        "primary-foreground": "hsl(0 0% 10%)",
        secondary: "hsl(0 0% 10%)",
        "secondary-foreground": "hsl(0 0% 90%)",
        muted: "hsl(0 0% 12%)",
        "muted-foreground": "hsl(0 0% 60%)",
        accent: "hsl(0 0% 14%)",
        "accent-foreground": "hsl(0 0% 90%)",
        border: "hsl(0 0% 18%)",
        input: "hsl(0 0% 18%)",
        ring: "hsl(0 0% 70%)",
        brand: {
          primary: "var(--brand-primary)",
          signal: "var(--brand-signal)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: [
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      // Tailwind 3 only ships a fixed opacity scale, while the design uses
      // fine-grained values (e.g. text-white/72). Register them here so the
      // existing class names keep working.
      opacity: {
        3: "0.03",
        4: "0.04",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        16: "0.16",
        18: "0.18",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        68: "0.68",
        72: "0.72",
        78: "0.78",
        84: "0.84",
        85: "0.85",
        88: "0.88",
      },
    },
  },
  plugins: [],
};
