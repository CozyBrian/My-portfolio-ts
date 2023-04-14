import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Sitenary from "sitenary";

if (process.env.NODE_ENV !== "development") {
  new Sitenary("63ebf9f3016df8a7928571db");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
