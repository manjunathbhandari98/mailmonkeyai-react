import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ToastProvider from "./components/common/Toast/ToastProvider.tsx";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ToastProvider>
  </StrictMode>
);
