import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";

import { GlobalStyles } from "./styles/global.styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
