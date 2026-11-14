export const basePath = import.meta.env.BASE_URL;

/** Turn a public-folder path into a URL that respects the Vite base path. */
export function asset(path = "") {
  return `${basePath}${String(path).replace(/^\/+/, "")}`;
}

/** BrowserRouter basename for GitHub Pages project deployments. */
export const routerBasename =
  basePath === "/" ? undefined : basePath.replace(/\/$/, "");
