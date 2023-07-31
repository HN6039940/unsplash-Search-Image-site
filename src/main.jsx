import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { UnsplashContextProvider } from "./context/Unsplash.context";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <UnsplashContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </UnsplashContextProvider>
);
