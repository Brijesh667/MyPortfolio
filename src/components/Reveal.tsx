import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

/**
 * Fades content in when it enters the viewport. Falls back to visible content
 * when the visitor prefers reduced motion or the browser has no observer.
 */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { "--delay": `${delay}ms` } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      "data-reveal": "",
      className,
      style,
      ...rest,
    },
    children,
  );
}
