import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ToolBar } from './components/ToolBar';
import { DrawerSide } from './components/Drawer';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { HomePage } from './components/Content/HomePage';
import { FilePage } from './components/Content/FilePage';
import { MessagePage } from './components/Content/MessagePage';


const drawerWidth = 240;

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ToolBar open={open} handleDrawerOpen={handleDrawerOpen}/>
        <DrawerSide open={open} handleDrawerClose={handleDrawerClose} theme={theme} />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage open={open} />} />
            <Route path='/file' element={<FilePage open={open} />} />
            <Route path='messages' element={<MessagePage open={open} />} />
          </Route>
        </Routes>
      </Box>
    </Router>
  );
}

const Layout = () => {
  return <Outlet />
}

export default App;
