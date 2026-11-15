export const MIN_GAP_MS = 5 * 60 * 1000;
export const MAX_PER_DAY = 5;
export const WINDOW_MS = 24 * 60 * 60 * 1000;

const STORAGE_KEY = "contact_sends";

function readTimestamps(now) {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((value) => typeof value === "number" && Number.isFinite(value))
      .filter((timestamp) => now - timestamp < WINDOW_MS);
  } catch {
    return [];
  }
}

function writeTimestamps(timestamps) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  } catch {
    // Storage can be unavailable in private mode; the form still works.
  }
}

export function checkRateLimit(now = Date.now()) {
  const timestamps = readTimestamps(now);

  if (timestamps.length > 0) {
    const lastSend = Math.max(...timestamps);
    const elapsed = now - lastSend;

    if (elapsed < MIN_GAP_MS) {
      const totalSeconds = Math.ceil((MIN_GAP_MS - elapsed) / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      return {
        allowed: false,
        message: `Wait ${minutes} min ${seconds} s before sending another message.`,
      };
    }
  }

  if (timestamps.length >= MAX_PER_DAY) {
    return {
      allowed: false,
      message: "Daily limit reached. Try again tomorrow.",
    };
  }

  return { allowed: true };
}

export function recordSuccessfulSend(now = Date.now()) {
  const timestamps = readTimestamps(now);
  writeTimestamps([...timestamps, now]);
}
