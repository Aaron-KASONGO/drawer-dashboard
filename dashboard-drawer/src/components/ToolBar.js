import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton, Typography, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const ToolBar = ({open, handleDrawerOpen}) => {
  return (
      <AppBar position="fixed" open={open}>
        <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
        >
          <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persisten
            </Typography>
          </Box>
          <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
          >
            <IconButton>
              <Badge badgeContent={4} color='error'>
                <NotificationsIcon /> 
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={4} color='error'>
                <MessageIcon /> 
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  )
}
