"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/app/lib/utils/cn";
import { assetPath } from "@/app/lib/utils/assetPath";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
  intervalMs?: number;
  className?: string;
}

const SLIDE_DURATION_MS = 700;

export default function ProjectGallery({
  images,
  alt,
  intervalMs = 2000,
  className,
}: ProjectGalleryProps) {
  const count = images.length;
  const loop = count > 1;

  // `active` drives the dots (0..count-1), `position` drives the track and can
  // point at the cloned first slide (count) for a seamless right-to-left loop.
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (!loop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
      setPosition((current) => (current >= count ? current : current + 1));
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [loop, count, intervalMs]);

  // After sliding onto the cloned first slide, jump back to the real one
  // without animating so the loop appears infinite.
  useEffect(() => {
    if (position !== count) return;

    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setPosition(0);
    }, SLIDE_DURATION_MS + 150);

    return () => window.clearTimeout(timeout);
  }, [position, count]);

  // Re-enable the transition on the next frame so the silent reset is instant.
  useEffect(() => {
    if (animate) return;

    let innerFrame = 0;
    const outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => setAnimate(true));
    });

    return () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
    };
  }, [animate]);

  if (count === 0) return null;

  const slides = loop ? [...images, images[0]] : images;

  const goTo = (index: number) => {
    setActive(index);
    setPosition(index);
  };

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-black/40",
        className,
      )}
    >
      <div
        className="flex h-full w-full will-change-transform"
        style={{
          transform: `translateX(-${position * 100}%)`,
          transition: animate
            ? `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.32, 0.72, 0, 1)`
            : "none",
        }}
      >
        {slides.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={assetPath(src)}
              alt={`${alt} screenshot ${(index % count) + 1}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {loop && (
        <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1.5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${alt} screenshot ${index + 1}`}
              aria-current={index === active}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/35 hover:bg-white/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
