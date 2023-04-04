import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ToolBar } from './components/ToolBar';
import { DrawerSide } from './components/Drawer';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { HomePage } from './components/Content/HomePage';
import { ReservationPage } from './components/Content/ReservationPage';
import { SallesPages } from './components/Content/SallesPages';
import { HistoriquePage } from './components/Content/HistoriquePage';


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
            <Route path='reservations' element={<ReservationPage open={open} />} />
            <Route path='salles' element={<SallesPages open={open} />} />
            <Route path='historique' element={<HistoriquePage open={open} />} />
            <Route path='clients' element={<SallesPages open={open} />} />
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
