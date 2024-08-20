import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-center" />
  </>
);
