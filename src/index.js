/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App></App>);
