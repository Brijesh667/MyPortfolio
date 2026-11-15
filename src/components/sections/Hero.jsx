import { motion } from "framer-motion";

import OptimizedImage from "../ui/OptimizedImage";
import { InteractiveGridPattern } from "../ui/InteractiveGridPattern";
import { assetPath } from "../../lib/assets";
import { Icon } from "../../lib/icons";
import portfolio from "../../data/portfolio";

export default function Hero() {
  const { hero, heroStats, profile, images, resumeUrl } = portfolio;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:pb-20"
    >
      <InteractiveGridPattern
        aria-hidden="true"
        width={48}
        height={48}
        squares={[30, 20]}
        viewBox="0 0 1440 960"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full border-0 opacity-60 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_0%,black,transparent)]"
        squaresClassName="stroke-white/[0.07]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
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
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <Icon name={hero.primaryCta.icon} className="h-4 w-4" />
            </a>
            <a
              href={assetPath(resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-white/20 hover:bg-white/6"
            >
              {hero.resumeCta.label}
              <Icon name={hero.resumeCta.icon} className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-black/20 lg:mt-10">
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
