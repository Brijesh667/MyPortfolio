import Chip from "./Chip";
import TechIcon from "./TechIcon";

export default function TechChip({ name, highlight = false }) {
  return (
    <Chip icon={TechIcon} iconProps={{ name }} highlight={highlight}>
      {name}
    </Chip>
  );
}
