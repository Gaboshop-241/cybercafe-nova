import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

requestAnimationFrame(() => {
  requestAnimationFrame(() => window.dispatchEvent(new Event("smart-cyber:ready")));
});
