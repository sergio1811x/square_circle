import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}
