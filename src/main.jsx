import React from "react";
import ReactDOM from "react-dom/client";

import "../src/styles/index.css";
import Routes from "./routes/Routes";
import { TokenProvider } from "./utils/states/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <Routes />
  </TokenProvider>
);
