import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Umami analytics is optional: only load it when VITE_UMAMI_ID is configured.
const umamiId = import.meta.env.VITE_UMAMI_ID;
if (umamiId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.dataset.websiteId = umamiId;
  document.body.appendChild(script);
}
