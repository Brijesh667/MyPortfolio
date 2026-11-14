import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../data/site";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function Keyword({ children, delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <span className="relative inline-block whitespace-nowrap font-medium text-fg">
      {children}
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-accent"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}

function Paragraph({ text }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);

  return (
    <p className="text-sm leading-8 text-muted sm:text-base">
      {parts.map((part, index) => {
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return (
            <Keyword key={index} delay={index * 0.12}>
              {part.slice(2, -2)}
            </Keyword>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </p>
  );
}

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading
        id="about-title"
        label="About me"
        title="A little context"
      />

      <Reveal delay={0.08} className="mt-8 max-w-[65ch] space-y-5">
        {site.about.paragraphs.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph} />
        ))}
      </Reveal>
    </Section>
  );
}
