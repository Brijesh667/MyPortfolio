import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy, FileText, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { assetPath } from "../../lib/assets";
import { checkRateLimit, recordSuccessfulSend } from "../../lib/rateLimit";
import portfolio from "../../data/portfolio";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const { contactPage, contact, socials, resumeUrl } = portfolio;
  const github = socials.find((social) => social.icon === "Github");
  const linkedin = socials.find((social) => social.icon === "Linkedin");

  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [botcheck, setBotcheck] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const copyTimeout = useRef(null);
  const nameRef = useRef(null);
  const panelOpenedAt = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (copyTimeout.current) window.clearTimeout(copyTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (open) panelOpenedAt.current = Date.now();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const timeout = window.setTimeout(
      () => nameRef.current?.focus(),
      reduceMotion ? 0 : 420,
    );

    return () => window.clearTimeout(timeout);
  }, [open, reduceMotion]);

  const handleCopy = async () => {
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = contact.email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copiedWithFallback = document.execCommand("copy");
      document.body.removeChild(textarea);
      return copiedWithFallback;
    };

    let copiedEmail = false;

    try {
      await navigator.clipboard.writeText(contact.email);
      copiedEmail = true;
    } catch {
      copiedEmail = fallbackCopy();
    }

    if (!copiedEmail) return;

    setCopied(true);
    if (copyTimeout.current) window.clearTimeout(copyTimeout.current);
    copyTimeout.current = window.setTimeout(() => setCopied(false), 1500);
  };

  const clearError = () => {
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    if (
      botcheck ||
      (panelOpenedAt.current !== null &&
        Date.now() - panelOpenedAt.current < 3000)
    ) {
      setError("");
      setSent(true);
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Fill in all three fields.");
      return;
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
      setError("Message must be 10 to 1000 characters.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      setError(rateLimit.message);
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey || accessKey === "PASTE_YOUR_KEY_HERE") {
      if (import.meta.env.DEV) {
        console.warn(
          "Contact form is not configured: VITE_WEB3FORMS_KEY is missing.",
        );
      }
      setError("Contact form is not configured.");
      return;
    }

    setError("");
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: "New message from portfolio",
          from_name: "Portfolio contact form",
          botcheck,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || data?.success !== true) {
        throw new Error("Web3Forms request failed");
      }

      recordSuccessfulSend();
      setSent(true);
    } catch {
      setError("Could not send the message. Try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setBotcheck(false);
    setSending(false);
    setSent(false);
    window.requestAnimationFrame(() => nameRef.current?.focus());
  };

  return (
    <section
      id="contact"
      className="scroll-mt-8 px-4 py-12 sm:scroll-mt-24 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl lg:pl-[51px]">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start xl:gap-8">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              {contactPage.title}
            </h1>
            <p className="mt-3 whitespace-pre-line text-neutral-400">
              {contactPage.intro}
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="break-all text-lg font-medium text-white sm:text-xl">
                  {contact.email}
                </p>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    aria-expanded={open}
                    aria-controls="contact-form-panel"
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                  >
                    {open ? "Close" : "Send email"}
                  </button>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id="contact-form-panel"
                    key="contact-form-panel"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.4, ease: "easeOut" }
                    }
                    className="overflow-hidden"
                  >
                    <div className="mt-4 border-t border-neutral-800 pt-4">
                      {sent ? (
                        <div aria-live="polite" className="space-y-3 py-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-white">Message sent</p>
                            <p className="mt-1 text-sm text-neutral-400">
                              Thanks for reaching out. I'll reply by email.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={resetForm}
                            className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
                          >
                            Send another
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} noValidate className="space-y-4">
                          <input
                            type="checkbox"
                            name="botcheck"
                            checked={botcheck}
                            onChange={(event) => setBotcheck(event.target.checked)}
                            tabIndex={-1}
                            aria-hidden="true"
                            autoComplete="off"
                            className="sr-only"
                          />

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                              <label
                                htmlFor="contact-name"
                                className="block text-xs text-neutral-400"
                              >
                                Name
                              </label>
                              <input
                                ref={nameRef}
                                id="contact-name"
                                name="name"
                                type="text"
                                value={name}
                                maxLength={100}
                                onChange={(event) => {
                                  setName(event.target.value);
                                  clearError();
                                }}
                                placeholder="Your name"
                                className="w-full rounded-lg border border-neutral-800 bg-black px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label
                                htmlFor="contact-email"
                                className="block text-xs text-neutral-400"
                              >
                                Your email
                              </label>
                              <input
                                id="contact-email"
                                name="email"
                                type="email"
                                value={email}
                                maxLength={150}
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                  clearError();
                                }}
                                placeholder="name@company.com"
                                className="w-full rounded-lg border border-neutral-800 bg-black px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label
                              htmlFor="contact-message"
                              className="block text-xs text-neutral-400"
                            >
                              Message
                            </label>
                            <textarea
                              id="contact-message"
                              name="message"
                              rows={4}
                              value={message}
                              minLength={10}
                              maxLength={1000}
                              onChange={(event) => {
                                setMessage(event.target.value);
                                clearError();
                              }}
                              placeholder="Tell me about the role or project"
                              className="w-full resize-none rounded-lg border border-neutral-800 bg-black px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none"
                            />
                          </div>

                          {error && (
                            <p
                              role="alert"
                              aria-live="polite"
                              className="text-sm text-red-400"
                            >
                              {error}
                            </p>
                          )}

                          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              disabled={sending}
                              className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white disabled:opacity-50"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={sending}
                              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200 disabled:opacity-60"
                            >
                              {sending ? "Sending…" : "Send message"}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={assetPath(resumeUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <FileText className="h-5 w-5 text-neutral-400" />
                <p className="mt-3 text-sm font-medium text-white">Resume</p>
                <p className="mt-1 text-xs text-neutral-500">PDF</p>
              </a>

              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/60"
                >
                  <Github className="h-5 w-5 text-neutral-400" />
                  <p className="mt-3 text-sm font-medium text-white">GitHub</p>
                  <p className="mt-1 text-xs text-neutral-500">Brijesh667</p>
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/60"
                >
                  <Linkedin className="h-5 w-5 text-neutral-400" />
                  <p className="mt-3 text-sm font-medium text-white">LinkedIn</p>
                  <p className="mt-1 text-xs text-neutral-500">Brijesh Kumar</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
