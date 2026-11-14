import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { asset } from "../../lib/assets";
import { cn } from "../../lib/cn";
import Lightbox from "./Lightbox";

export default function ImageSlider({
  images,
  label = "Project screenshots",
  autoAdvance = 3000,
  className,
  rounded = "rounded-2xl",
}) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dragged = useRef(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const reduce = useReducedMotion();
  const total = images.length;

  useEffect(() => {
    if (
      reduce ||
      !autoAdvance ||
      !inView ||
      total < 2 ||
      hovered ||
      focused ||
      lightboxOpen
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, autoAdvance);

    return () => window.clearInterval(timer);
  }, [reduce, autoAdvance, inView, total, hovered, focused, lightboxOpen]);

  const go = (direction) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <div
      ref={containerRef}
      className={cn("group relative", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <div
        className={cn(
          "relative aspect-video overflow-hidden border border-line bg-surface",
          rounded,
        )}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <motion.div
          className="absolute inset-0 cursor-zoom-in"
          style={{ touchAction: "pan-y" }}
          drag={total > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.06}
          dragDirectionLock
          onPointerDown={() => {
            dragged.current = false;
          }}
          onDragStart={() => {
            dragged.current = false;
          }}
          onDrag={(_, info) => {
            if (Math.abs(info.offset.x) > 8) dragged.current = true;
          }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) go(1);
            if (info.offset.x > 50) go(-1);
          }}
          onClick={() => {
            if (!dragged.current) setLightboxOpen(true);
          }}
          role="button"
          tabIndex={0}
          aria-label={`Open ${label} image ${index + 1} in full screen`}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setLightboxOpen(true);
            }
          }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={asset(images[index].src)}
              alt={images[index].alt || `${label} ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.45 }}
              draggable={false}
              loading="lazy"
            />
          </AnimatePresence>
        </motion.div>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-white transition-colors hover:bg-black/70 sm:grid"
            >
              <FiChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-white transition-colors hover:bg-black/70 sm:grid"
            >
              <FiChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="mt-2 flex items-center justify-center gap-0.5">
          {images.map((image, dotIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
              className="grid h-6 w-6 place-items-center"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block h-1.5 rounded-full",
                  dotIndex === index
                    ? "w-5 bg-accent"
                    : "w-1.5 bg-line-strong hover:bg-muted",
                )}
              />
            </button>
          ))}
        </div>
      ) : null}

      <Lightbox
        open={lightboxOpen}
        images={images}
        initialIndex={index}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
