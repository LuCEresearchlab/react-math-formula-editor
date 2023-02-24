import React from "react";
import ReactDOM from "react-dom/client";
import InputComponent from "./Components/InputComponent/InputComponent";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InputComponent />
    </ThemeProvider>
  </React.StrictMode>
);
