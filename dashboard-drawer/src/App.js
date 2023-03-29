import { Box } from "@mui/material"
import { Stack } from "@mui/system";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SIdeBar/SideBar";


function App() {
  return (
    <Box>
      <Navbar />
      <Stack>
        <SideBar />
      </Stack>
    </Box>
  );
}

export default App;
