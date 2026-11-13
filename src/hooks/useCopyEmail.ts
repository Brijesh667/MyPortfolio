import { useCallback, useEffect, useRef, useState } from "react";

function fallbackCopy(text: string): boolean {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(field);
  return copied;
}

export function useCopyEmail(email: string) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const timer = useRef<number | null>(null);

  const copy = useCallback(async () => {
    let succeeded = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        succeeded = true;
      } else {
        succeeded = fallbackCopy(email);
      }
    } catch {
      succeeded = fallbackCopy(email);
    }

    setCopied(succeeded);
    setStatus(
      succeeded
        ? "Email address copied to clipboard."
        : `Couldn't copy automatically — the address is ${email}`,
    );

    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
      setStatus("");
    }, 3000);
  }, [email]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  return { copied, status, copy };
}
