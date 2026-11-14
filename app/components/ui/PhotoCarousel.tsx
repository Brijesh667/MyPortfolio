"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/app/lib/utils/cn";
import { assetPath } from "@/app/lib/utils/assetPath";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  images: CarouselImage[];
  intervalMs?: number;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

type Direction =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";

const DIRECTIONS: Direction[] = [
  "left-to-right",
  "right-to-left",
  "top-to-bottom",
  "bottom-to-top",
];

const slideVariants = {
  enter: (direction: Direction) => ({
    x:
      direction === "left-to-right"
        ? "-100%"
        : direction === "right-to-left"
          ? "100%"
          : 0,
    y:
      direction === "top-to-bottom"
        ? "-100%"
        : direction === "bottom-to-top"
          ? "100%"
          : 0,
  }),
  center: { x: 0, y: 0 },
  exit: (direction: Direction) => ({
    x:
      direction === "left-to-right"
        ? "100%"
        : direction === "right-to-left"
          ? "-100%"
          : 0,
    y:
      direction === "top-to-bottom"
        ? "100%"
        : direction === "bottom-to-top"
          ? "-100%"
          : 0,
  }),
};

export default function PhotoCarousel({
  images,
  intervalMs = 3000,
  sizes = "100vw",
  className,
  imageClassName,
  priority = false,
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("right-to-left");
  const lastDirection = useRef<Direction | null>(null);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const options = DIRECTIONS.filter(
        (candidate) => candidate !== lastDirection.current,
      );
      const nextDirection =
        options[Math.floor(Math.random() * options.length)];
      lastDirection.current = nextDirection;

      setDirection(nextDirection);
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [images.length, intervalMs]);

  // Warm the browser cache so each slide is ready before it animates in.
  useEffect(() => {
    images.forEach(({ src }) => {
      const preload = new window.Image();
      preload.src = assetPath(src);
    });
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-black/20",
        className,
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={images[index].src}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={assetPath(images[index].src)}
            alt={images[index].alt}
            fill
            sizes={sizes}
            priority={priority && index === 0}
            unoptimized
            className={cn("object-cover", imageClassName)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
