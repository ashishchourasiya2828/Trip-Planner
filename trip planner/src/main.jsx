import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "../context/AppProvider.jsx";

import { Provider } from "react-redux";
import { store } from "./Store/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </Provider>
);
