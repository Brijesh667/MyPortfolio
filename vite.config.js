import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project from /MyPortfolio, so production builds use
// that base path. The dev server stays at the root for convenience.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/MyPortfolio/",
  build: {
    outDir: "dist",
  },
}));
