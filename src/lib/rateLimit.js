const STORAGE_KEY = "portfolio:contact-sends";
const WINDOW_MS = 24 * 60 * 60 * 1000;
const LIMIT = 2;

function readSends() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((value) => typeof value === "number")
      : [];
  } catch {
    return [];
  }
}

export function checkRateLimit(now = Date.now()) {
  const recent = readSends().filter((timestamp) => now - timestamp < WINDOW_MS);
  return {
    allowed: recent.length < LIMIT,
    remaining: Math.max(0, LIMIT - recent.length),
  };
}

export function recordSend(now = Date.now()) {
  try {
    const recent = readSends().filter(
      (timestamp) => now - timestamp < WINDOW_MS,
    );
    recent.push(now);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // Storage can be unavailable; the form still works for this session.
  }
}
