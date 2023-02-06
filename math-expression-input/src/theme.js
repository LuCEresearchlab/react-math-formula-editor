import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#FE2D00" },
    secondary: { main: "#00FE2D" },
    mode: "light",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
