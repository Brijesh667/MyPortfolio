// Prefixes local public assets with the GitHub Pages base path when the site
// is exported under /MyPortfolio. Local development and Vercel use "".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
