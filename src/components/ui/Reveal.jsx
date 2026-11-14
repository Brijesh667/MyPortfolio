import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  header: motion.header,
};

/** Fade-up on scroll, once. The only entrance animation used site-wide. */
export default function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motionTags[as] || motion.div;

  return (
    <Tag
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
