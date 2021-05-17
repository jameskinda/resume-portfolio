import { createMuiTheme } from "@material-ui/core";

const primary = "#73CCA8";
const text = "#DBE8D4";
const background = "#222733";
const appbar = "#222";
const drawer = "#511";
const link = "#2196f3";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: primary,
    },
    text: {
      main: text,
    },
    background: {
      main: background,
    },
    appbar: {
      main: appbar,
    },
    drawer: {
      main: drawer,
    },
    link: {
      main: link,
    },
  },
});

export default theme;
