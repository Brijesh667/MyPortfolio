import { isValidElement, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/atom-one-dark.css";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { getProject } from "../data/projects";
import { asset } from "../lib/assets";
import Button from "../components/ui/Button";
import Mermaid from "../components/ui/Mermaid";
import ProjectBadge from "../components/sections/ProjectBadge";
import NotFound from "./NotFound";

const markdownFiles = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const contentBySlug = Object.fromEntries(
  Object.entries(markdownFiles).map(([path, content]) => [
    path.split("/").pop().replace(/\.md$/, ""),
    content,
  ]),
);

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  const content = contentBySlug[slug];
  const bodyContent = content
    ? content.replace(/^#\s+.*\r?\n+/, "")
    : content;
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.name} — Brijesh Kumar`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const container = contentRef.current;
      if (!container) return;

      const headings = Array.from(
        container.querySelectorAll("h2[id], h3[id]"),
      ).map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName === "H2" ? 2 : 3,
      }));

      setToc(headings);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [slug, content]);

  if (!project || !content) return <NotFound />;

  return (
    <div className="pb-16 pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-fg"
        >
          <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
          Back to projects
        </Link>

        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mt-8 border-b border-line pb-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <ProjectBadge badge={project.badge} />
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Case study
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-sm text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.liveUrl ? (
              <Button href={project.liveUrl} external size="sm">
                Live Demo
                <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="sm"
              >
                <FiGithub aria-hidden="true" className="h-3.5 w-3.5" />
                GitHub
              </Button>
            ) : null}
          </div>
        </motion.header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,750px)_200px] lg:justify-between">
          <article ref={contentRef}>
            <div className="project-prose prose prose-slate max-w-none dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeHighlight]}
                components={{
                  pre({ node: _node, children }) {
                    const child = Array.isArray(children)
                      ? children[0]
                      : children;
                    if (
                      isValidElement(child) &&
                      typeof child.props.className === "string" &&
                      child.props.className.includes("language-mermaid")
                    ) {
                      return (
                        <Mermaid
                          chart={String(child.props.children).replace(/\n$/, "")}
                        />
                      );
                    }
                    return <pre>{children}</pre>;
                  },
                  a({ href = "", children, node: _node, ...props }) {
                    const external = /^https?:\/\//.test(href);
                    return (
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  },
                  img({ src = "", alt = "", node: _node, ...props }) {
                    const resolved = /^https?:\/\//.test(src)
                      ? src
                      : asset(src.replace(/^\//, ""));
                    return (
                      <img
                        src={resolved}
                        alt={alt}
                        loading="lazy"
                        {...props}
                      />
                    );
                  },
                  table({ children, node: _node }) {
                    return (
                      <div className="overflow-x-auto">
                        <table>{children}</table>
                      </div>
                    );
                  },
                }}
              >
                {bodyContent}
              </ReactMarkdown>
            </div>
          </article>

          {toc.length > 0 ? (
            <aside className="hidden lg:block" aria-label="On this page">
              <div className="sticky top-24">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                  On this page
                </p>
                <ul className="mt-3 space-y-2 border-l border-line pl-3">
                  {toc.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className={`block text-xs leading-5 text-muted transition-colors hover:text-fg ${
                          heading.level === 3 ? "pl-3" : ""
                        }`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}
