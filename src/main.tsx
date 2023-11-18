import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { VacancieProvider } from "./providers/VacancieContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <VacancieProvider>
        <App />
      </VacancieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
