import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuastionsContextProvider } from "./context/Quastionscontext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <QuastionsContextProvider>
      <App />
    </QuastionsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
