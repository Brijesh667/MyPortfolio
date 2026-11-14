import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { site } from "../../data/site";
import { sendMessage } from "../../lib/sendMessage";
import { checkRateLimit, recordSend } from "../../lib/rateLimit";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const initialForm = { name: "", email: "", message: "", botcheck: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactCards = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brijesh-kumar-56093832a",
    href: site.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Brijesh667",
    href: site.github,
    icon: FiGithub,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) next.name = "Please add your name.";
    else if (name.length > 80) next.name = "Name must be 80 characters or fewer.";

    if (!email) next.email = "Please add your email.";
    else if (!emailPattern.test(email)) next.email = "Enter a valid email address.";

    if (message.length < 10)
      next.message = "Message must be at least 10 characters.";
    else if (message.length > 1000)
      next.message = "Message must be 1000 characters or fewer.";

    return next;
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(site.email);
      } else {
        const field = document.createElement("textarea");
        field.value = site.email;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(true);
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    // Honeypot: quietly accept without doing any network work.
    if (form.botcheck) {
      setStatus("success");
      return;
    }

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const limit = checkRateLimit();
    if (!limit.allowed) {
      setStatus("limit");
      setStatusMessage(
        "Daily limit reached, please try again tomorrow or email me directly.",
      );
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        botcheck: form.botcheck,
      });
      recordSend();
      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error.code === "missing-key"
          ? "The contact form isn't connected yet. Please email me directly."
          : "Something went wrong, please email me directly.",
      );
    }
  };

  const messageTone =
    status === "success"
      ? "text-[var(--success)]"
      : status === "error" || status === "limit"
        ? "text-red-500 dark:text-red-400"
        : "text-muted";

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Let&apos;s build something together
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 block h-1 w-10 rounded-full bg-accent"
          />

          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            I&apos;m open to internships and full-time opportunities — and happy
            to answer any question.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface p-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text">
                <FiMail aria-hidden="true" className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm text-fg transition-colors hover:text-accent-text"
                >
                  {site.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                {copied ? (
                  <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                ) : (
                  <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
                )}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "Email address copied." : ""}
              </span>
            </div>

            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface p-3.5 transition-colors hover:border-line-strong"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-muted">
                      {card.label}
                    </span>
                    <span className="block truncate text-sm text-fg">
                      {card.value}
                    </span>
                  </span>
                </a>
              );
            })}

            <div className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface p-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text">
                <FiMapPin aria-hidden="true" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  Location
                </p>
                <p className="text-sm text-fg">{site.location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <div className="min-w-0 rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-7">
            <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
              Send a message
            </h3>
            <p className="mt-1 text-xs text-muted">
              I usually reply within a day.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
              <input
                type="text"
                name="botcheck"
                value={form.botcheck}
                onChange={update("botcheck")}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
              />

              <div>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Your name"
                  className="field"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={120}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500 dark:text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  maxLength={1000}
                  placeholder="What are you building?"
                  className="field resize-y"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                <div className="mt-1.5 flex items-start justify-between gap-3">
                  {errors.message ? (
                    <p id="message-error" className="text-xs text-red-500 dark:text-red-400">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-[11px] text-muted">
                    {form.message.length}/1000
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend aria-hidden="true" className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <AnimatePresence mode="wait">
                {status !== "idle" && status !== "sending" ? (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-start gap-2 rounded-xl border border-line bg-bg-soft p-3 text-xs leading-5 ${messageTone}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status === "success" ? (
                      <FiCheck
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0"
                      />
                    ) : (
                      <FiAlertCircle
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0"
                      />
                    )}
                    <span>
                      {status === "success"
                        ? "Message sent! I'll reply soon."
                        : statusMessage ||
                          "Something went wrong, please email me directly."}{" "}
                      {status !== "success" ? (
                        <a
                          href={`mailto:${site.email}`}
                          className="underline underline-offset-2"
                        >
                          {site.email}
                        </a>
                      ) : null}
                    </span>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
