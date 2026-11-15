// Prefixes local public assets with the GitHub Pages base path when the site is
// built under /MyPortfolio. Local development stays at the root.
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function assetPath(path) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
