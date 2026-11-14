import type { NextConfig } from "next";

// GitHub Pages serves this project from /MyPortfolio, so the exported build
// needs the matching base path. Local development and Vercel stay at the root.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/MyPortfolio" : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: "/MyPortfolio",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
