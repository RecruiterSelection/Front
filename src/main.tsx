import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProvidersComponent } from "./providers/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvidersComponent>
        <App />
      </ProvidersComponent>
    </BrowserRouter>
  </React.StrictMode>
);
