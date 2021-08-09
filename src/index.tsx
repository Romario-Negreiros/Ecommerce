import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Reset.css";
import themes from "./themes";
import { ThemeProvider } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
