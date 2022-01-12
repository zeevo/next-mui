import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import AppContextProvider, { Consumer } from "../client/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </Consumer>
    </AppContextProvider>
  );
}

export default MyApp;
