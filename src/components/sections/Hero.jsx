import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { site } from "../../data/site";
import { asset } from "../../lib/assets";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent-soft blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-content gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-14 md:pb-24 md:pt-20">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              </span>
              {site.availability}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-accent-text">Brijesh Kumar</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-sm font-medium text-fg sm:text-base">
              {site.tagline}
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted sm:text-sm">
              <span aria-hidden="true" className="text-accent-text">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m3 9 9-5 9 5-9 5-9-5Z" />
                  <path d="M7 11v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5M21 9v6" />
                </svg>
              </span>
              {site.educationLine}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {site.intro}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/#projects" size="lg">
              View Projects
            </Button>
            <Button
              href={asset(site.resumePath)}
              external
              variant="secondary"
              size="lg"
            >
              <FiFileText aria-hidden="true" className="h-4 w-4" />
              View Resume
              <FiArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Button>
          </Reveal>

          <Reveal delay={0.22} className="mt-7">
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.08} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[360px] md:max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-accent-soft blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2 shadow-card">
              <img
                src={asset(site.photo)}
                alt="Brijesh Kumar"
                width="800"
                height="1000"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
