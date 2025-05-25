import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";
import { GlobalStyle } from "./GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle/>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
