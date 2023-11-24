import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { VacancieProvider } from "./providers/VacancieContext";
import { CandidateProvider } from "./providers/user/perfilCandidato/userProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CandidateProvider>
        <VacancieProvider>
          <App />
        </VacancieProvider>
      </CandidateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
