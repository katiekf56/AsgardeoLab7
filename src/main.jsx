import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5174/",
  signOutRedirectURL: "http://localhost:5174/",
  clientID: "j_7fCKRzOKtG0ANnFfRtcr52_3oa",
  baseUrl: "https://api.asgardeo.io/t/mis372tfullstack",
  scope: ["openid", "profile", "email"]
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
