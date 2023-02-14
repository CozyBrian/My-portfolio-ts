import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sitenary from "sitenary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (process.env.NODE_ENV !== "development") {
  const sitenary = new Sitenary("63ebf9f3016df8a7928571db");
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
