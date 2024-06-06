import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./tailwind.css";

const rootContainer = document.getElementById("root");

if (rootContainer === null) {
  throw new Error("Root container not found");
}

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
