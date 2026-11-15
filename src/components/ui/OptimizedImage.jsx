import { assetPath } from "../../lib/assets";
import { cn } from "../../lib/cn";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
}) {
  return (
    <div
      className={cn("relative overflow-hidden", fill && "h-full w-full", className)}
    >
      <img
        src={assetPath(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={cn("object-cover", fill && "h-full w-full", className)}
      />
    </div>
  );
}
