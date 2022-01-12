import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppContext } from "../../context";

const AppBar = () => {
  const { mode, toggleColorMode } = useAppContext();
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next MUI
        </Typography>

        <IconButton
          sx={{ flexGrow: 0 }}
          onClick={toggleColorMode}
          color="inherit"
        >
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
