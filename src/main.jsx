import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/AppContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster />
      <App />
    </AppContextProvider>
  </StrictMode>
);
