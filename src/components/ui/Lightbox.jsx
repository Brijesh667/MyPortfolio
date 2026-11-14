import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { asset } from "../../lib/assets";

export default function Lightbox({ open, images, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const lastFocused = useRef(null);
  const total = images.length;

  useEffect(() => {
    if (!open) return;

    setIndex(initialIndex);
    lastFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => closeRef.current?.focus(), 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      if (lastFocused.current instanceof HTMLElement) {
        lastFocused.current.focus({ preventScroll: true });
      }
    };
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % total);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + total) % total);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll("button, [href]"),
        ).filter((node) => !node.hasAttribute("disabled"));
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, total, onClose]);

  if (typeof document === "undefined" || total === 0) return null;

  const go = (direction) =>
    setIndex((current) => (current + direction + total) % total);

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          onClick={onClose}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <FiX aria-hidden="true" className="h-5 w-5" />
          </button>

          <motion.div
            className="relative flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            drag={total > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              if (info.offset.x > 60) go(-1);
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={index}
                src={asset(images[index].src)}
                alt={images[index].alt || `Image ${index + 1}`}
                className="max-h-[82vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.2 }}
                draggable={false}
              />
            </AnimatePresence>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-black/70 sm:left-3"
                >
                  <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-black/70 sm:right-3"
                >
                  <FiChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white/80">
                  {index + 1} / {total}
                </span>
              </>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
