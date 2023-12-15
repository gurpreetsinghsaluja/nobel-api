import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ol.custom-list {
          counter-reset: list-counter;
        }
        ol.custom-list li {
          counter-increment: list-counter;
          list-style: none;
        }
        ol.custom-list li::before {
          content: 'Laureate #' counter(list-counter) ': ';
          font-weight: bold;
        }
      `,
    },
  },
  palette: {
    primary: {
      light: "#e0ece6",
      main: "#e0ece5",
      dark: "#e0ece4",
      contrastText: "#222222",
    },
    secondary: {
      main: "#4db6ac",
    },
    background: {
      default: "#e0ece4",
    },
    error: {
      main: "#e57373",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
