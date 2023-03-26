import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "@descope/react-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider projectId="P2Mle32jtS3eU0Ursz2XsrkXOxR9">
    <App />
  </AuthProvider>
);
