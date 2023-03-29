import { Box } from "@mui/material"
import { Stack } from "@mui/system";
import { Home } from "./components/Content/Home";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SIdeBar/SideBar";


function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row'>
        <SideBar />
        <Home />
      </Stack>
    </Box>
  );
}

export default App;
