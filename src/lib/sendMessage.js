const ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Isolated contact transport. Swap this file for a custom backend later
 * (e.g. POST /api/contact) without touching the form component.
 */
export async function sendMessage({ name, email, message, botcheck }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();

  if (!accessKey) {
    const error = new Error(
      "The contact form isn't connected yet. Please email me directly.",
    );
    error.code = "missing-key";
    throw error;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      botcheck: botcheck || false,
      subject: `Portfolio message from ${name}`,
    }),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    // Keep the friendly generic error below.
  }

  if (!response.ok || data.success === false) {
    throw new Error(
      data.message || "Something went wrong, please email me directly.",
    );
  }

  return data;
}
