import { Box } from "@mui/system";

const Main = ({ children }) => (
  <Box sx={{ flex: "1 1 0%" }} as="main">
    {children}
  </Box>
);

export default Main;
