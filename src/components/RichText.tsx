import { Fragment, type ReactNode } from "react";

/**
 * Renders plain strings that may contain **double-asterisk emphasis**.
 */
export function RichText({ children }: { children: string }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
