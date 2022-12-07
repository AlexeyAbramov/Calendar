import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const CalendarApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(CalendarApp);
