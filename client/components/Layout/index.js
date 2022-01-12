import { Box } from "@mui/material";
import AppBar from "../AppBar";
import Footer from "../Footer";
import Main from "../Main";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <AppBar />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

export default Layout;
