import "react-toastify/dist/ReactToastify.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { globalStyles } from "./styles/globalStyles.ts";
import { App } from "./App.tsx";
import { queryClient } from "./lib/queryClient.ts";
import { StoreProvider } from "easy-peasy";
import { store } from "./stores/index.ts";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);
