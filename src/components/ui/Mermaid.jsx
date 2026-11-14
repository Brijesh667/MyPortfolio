import { useEffect, useId, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

let mermaidCounter = 0;

export default function Mermaid({ chart }) {
  const { theme } = useTheme();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const reactId = useId();

  useEffect(() => {
    let cancelled = false;
    setSvg("");
    setError("");

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: theme === "dark" ? "dark" : "neutral",
          fontFamily: "Inter, system-ui, sans-serif",
        });

        mermaidCounter += 1;
        const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}-${mermaidCounter}`;
        const result = await mermaid.render(id, chart);

        if (!cancelled) setSvg(result.svg);
      } catch (err) {
        if (!cancelled) setError(err.message || "Could not render diagram.");
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, theme, reactId]);

  if (error) {
    return (
      <div className="mermaid-diagram">
        <p className="mb-2 text-xs text-red-500 dark:text-red-400">
          Diagram failed to render: {error}
        </p>
        <pre className="overflow-x-auto text-xs text-muted">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="mermaid-diagram text-xs text-muted">
        Rendering diagram…
      </div>
    );
  }

  return (
    <div
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
