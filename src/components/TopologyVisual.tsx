import { Icon } from "./Icon";

const edges = [
  "M260 190 430 190",
  "M260 190 345 294",
  "M260 190 175 294",
  "M260 190 90 190",
  "M260 190 175 86",
  "M260 190 345 86",
  "M430 190 345 294",
  "M345 294 175 294",
  "M175 294 90 190",
  "M90 190 175 86",
  "M175 86 345 86",
  "M345 86 430 190",
];

const liveEdges = [
  "M260 190 345 86",
  "M260 190 175 294",
  "M345 294 430 190",
];

const nodes = [
  { x: 430, y: 190, label: "planner", labelY: 228 },
  { x: 345, y: 294, label: "critic", labelY: 332 },
  { x: 175, y: 294, label: "retriever", labelY: 332 },
  { x: 90, y: 190, label: "executor", labelY: 228 },
  { x: 175, y: 86, label: "judge", labelY: 56 },
  { x: 345, y: 86, label: "router", labelY: 56 },
];

export function TopologyVisual() {
  return (
    <>
      <div className="topology" aria-hidden="true">
        <div className="topology__bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="topology__name">agentcascade / mesh</span>
        </div>

        <svg className="topology__svg" viewBox="0 0 520 380" role="presentation">
          <g className="edges">
            {edges.map((d) => (
              <path className="edge" d={d} key={d} />
            ))}
            {liveEdges.map((d) => (
              <path className="edge edge--live" d={d} key={`live-${d}`} />
            ))}
          </g>

          {nodes.map((node) => (
            <g className="node" key={node.label}>
              <circle className="node__pulse" cx={node.x} cy={node.y} r="24" />
              <circle className="node__ring" cx={node.x} cy={node.y} r="24" />
              <text className="node__label" x={node.x} y={node.labelY}>
                {node.label}
              </text>
            </g>
          ))}

          <g className="node node--hub">
            <circle className="node__pulse" cx="260" cy="190" r="40" />
            <circle className="node__hub" cx="260" cy="190" r="40" />
            <text className="node__hub-label" x="260" y="194">
              A2A
            </text>
          </g>
        </svg>

        <div className="topology__meta">
          <span>
            <b>03</b> topologies
          </span>
          <span className="topology__sep" aria-hidden="true" />
          <span>
            <b>40%</b> faster evals
          </span>
          <span className="topology__sep" aria-hidden="true" />
          <span className="topology__ok">
            <i aria-hidden="true" /> A2A protocol
          </span>
        </div>
      </div>

      <div className="float-card float-card--award">
        <span className="float-card__icon" aria-hidden="true">
          <Icon name="trophy" strokeWidth={1.6} />
        </span>
        <span>
          <strong>SIH 2025</strong>
          <small>1st / 500+ teams</small>
        </span>
      </div>
    </>
  );
}
