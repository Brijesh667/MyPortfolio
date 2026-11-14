import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

import PhotoCarousel from "@/app/components/ui/PhotoCarousel";
import { assetPath } from "@/app/lib/utils/assetPath";
import portfolio from "@/app/lib/config/portfolio";

export default function Contact() {
  const { contactPage, contact, socials, images, resumeUrl } = portfolio;
  const github = socials.find((social) => social.icon === "Github");
  const linkedin = socials.find((social) => social.icon === "Linkedin");

  return (
    <section
      id="contact"
      className="px-4 pb-24 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {contactPage.title}
            </h1>
            <p className="text-base leading-7 text-white/72 sm:text-lg">
              {contactPage.intro}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/20">
            <PhotoCarousel
              images={images.gallery}
              className="h-72 sm:h-[28rem]"
              sizes="(min-width: 1024px) 560px, 100vw"
              imageClassName="object-[50%_20%]"
              priority
            />
          </div>
        </header>

        <div className="section-shell max-w-2xl p-6 sm:p-8">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              {contact.email}
              <Mail className="h-4 w-4" />
            </a>

            <a
              href={assetPath(resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/84 transition-colors hover:bg-white/[0.06]"
            >
              Resume
              <FileText className="h-4 w-4 text-brand-primary" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5 text-sm font-semibold">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/72 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4 text-brand-primary" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 text-white/35" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/72 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-brand-primary" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 text-white/35" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
