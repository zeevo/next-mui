import { createTheme } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react";

const THEME = "theme";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const Provider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const existingPreference = window.localStorage.getItem(THEME);
    if (existingPreference) {
      existingPreference === "light" ? setMode("light") : setMode("dark");
    } else {
      setMode("light");
      localStorage.setItem(THEME, "light");
    }
  }, []);

  const toggleColorMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    window.localStorage.setItem(THEME, nextMode);
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <AppContext.Provider value={{ theme, mode, toggleColorMode }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

export const { Consumer } = AppContext;
