"use client";
import { createTheme } from "@mui/material/styles";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    // mode: "dark",
    primary: {
      main: "rgb(254 151 76)",
      // main: "#ffffff",
    },
    secondary: {
      main: "#045496",
    },
    background: {
      paper: "#ffffff",
      dark: "#1a1919",
      main: "#eee",
    },
    error: {
      main: "#ff1200",
    },
    info: {
      main: "#ffffff",
    },

    black: {
      main: "#00000",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
