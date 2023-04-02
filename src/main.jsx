import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { Store } from "./app/store";
import "./App.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <App className="" />
    </Provider>
  </StrictMode>
);
