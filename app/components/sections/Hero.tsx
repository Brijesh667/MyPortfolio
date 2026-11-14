"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { Icon } from "@/app/lib/icons";
import { assetPath } from "@/app/lib/utils/assetPath";
import portfolio from "@/app/lib/config/portfolio";

export default function Hero() {
  const { hero, heroStats, profile, images, resumeUrl } = portfolio;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:pb-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
      >
        <div className="space-y-6 sm:space-y-8">
          <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight text-white">
            {hero.heading}
          </h1>

          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <Icon name={hero.primaryCta.icon} className="h-4 w-4" />
            </Link>
            <a
              href={assetPath(resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-white/20 hover:bg-white/6"
            >
              {hero.resumeCta.label}
              <Icon name={hero.resumeCta.icon} className="h-4 w-4" />
            </a>
            <Link
              href={hero.contactCta.href}
              className="text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {hero.contactCta.label}
            </Link>
          </div>

          {profile.availability && (
            <p className="text-sm text-white/55">{profile.availability}</p>
          )}
        </div>

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-black/20">
          <div className="relative min-h-80 sm:min-h-[30rem]">
            <OptimizedImage
              src={images.hero}
              alt={`${profile.name} portrait`}
              fill
              priority
              className="absolute inset-0 z-0 object-cover object-[50%_18%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.12)_0%,rgba(5,5,5,0.24)_34%,rgba(5,5,5,0.72)_100%)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
