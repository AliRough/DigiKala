import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Store } from "./app/store";
import "./App.css"
import 'flowbite';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <App className="" />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
