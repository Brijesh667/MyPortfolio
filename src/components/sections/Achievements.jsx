import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { dsa, sih } from "../../data/achievements";
import { asset } from "../../lib/assets";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import CountUp from "../ui/CountUp";
import Lightbox from "../ui/Lightbox";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function SihGallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reduce = useReducedMotion();
  const image = sih.images[active];

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Open SIH photo ${active + 1} in full screen`}
        className="relative block aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line bg-surface-2"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={image.src}
            src={asset(image.src)}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35 }}
            loading="lazy"
            draggable={false}
          />
        </AnimatePresence>
      </button>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {sih.images.map((thumb, index) => (
          <button
            key={thumb.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show SIH photo ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            className={cn(
              "relative aspect-[3/2] overflow-hidden rounded-lg border transition-colors",
              index === active
                ? "border-accent"
                : "border-line opacity-70 hover:opacity-100",
            )}
          >
            <img
              src={asset(thumb.src)}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        images={sih.images}
        initialIndex={active}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" labelledBy="achievements-title">
      <SectionHeading
        id="achievements-title"
        label="Achievements"
        title="Wins worth mentioning"
      />

      <Reveal className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface p-4 shadow-card sm:p-6">
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <SihGallery />

          <div>
            <span className="inline-flex rounded-full border border-accent-border bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent-text">
              {sih.badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {sih.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-text">
              {sih.subtitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">{sih.story}</p>

            <p className="mt-4 text-xs text-muted">
              Project:{" "}
              <span className="font-medium text-fg">{sih.projectName}</span>
            </p>

            <Button
              to={`/projects/${sih.projectSlug}`}
              variant="secondary"
              size="sm"
              className="mt-5"
            >
              View Project Details
              <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={0.08}
        className="mt-5 rounded-2xl border border-line bg-surface p-6 shadow-card"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-4xl font-semibold tracking-tight text-fg">
              <CountUp value={dsa.total} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted">
              DSA problems solved (C++)
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-xs text-muted">GeeksforGeeks</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-fg">
                {dsa.gfg}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">LeetCode</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-fg">
                {dsa.leetcode}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Medium / Hard</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-fg">
                {dsa.mediumHard}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {dsa.gfgUrl ? (
            <Button href={dsa.gfgUrl} external variant="secondary" size="sm">
              View GfG
              <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Button>
          ) : null}
          {dsa.leetcodeUrl ? (
            <Button
              href={dsa.leetcodeUrl}
              external
              variant="secondary"
              size="sm"
            >
              View LeetCode
              <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Button>
          ) : null}
          <span className="ml-auto text-[11px] text-muted">{dsa.updated}</span>
        </div>
      </Reveal>
    </Section>
  );
}
