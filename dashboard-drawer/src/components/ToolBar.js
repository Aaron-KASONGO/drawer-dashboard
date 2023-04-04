import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton, Typography, Box, Toolbar, Tooltip, Menu, MenuItem, ListItemAvatar, ListItem, ListItemText, Avatar, Divider, MenuList, ListItemButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import { useState } from 'react'

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorNotif, setAnchorNotif] = useState(null);
  const openNofif = Boolean(anchorNotif)
  const openMessage = Boolean(anchorEl)
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
            <Tooltip title='Notifications'>
              <IconButton
                id='notif-button'
                onClick={(e) => setAnchorNotif(e.currentTarget)}
              >
                <Badge badgeContent={4} color='error'>
                  <NotificationsIcon /> 
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title='Messages non lus'>
              <IconButton
                id='message-button'
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Badge badgeContent={4} color='error'>
                  <MessageIcon /> 
                </Badge>
              </IconButton>
            </Tooltip>

            <Menu
              id='message-menu'
              anchorEl={anchorEl}
              open={openMessage}
              onClose={(e) => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'message-button'
              }}
            >
              <MenuList
              sx={{
                maxWidth: 360,
                width: '100%'
              }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                </ListItem>
              </MenuList>
            </Menu>

            <Menu
              id='notif-menu'
              anchorEl={anchorNotif}
              open={openNofif}
              onClose={(e) => setAnchorNotif(null)}
              MenuListProps={{
                'aria-labelledby': 'message-button'
              }}
            >
              <MenuList
              sx={{
                maxWidth: 360,
                width: '100%'
              }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Bonjour cher Admin, le client Olivier vient de prendre une retraite"
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
                <Divider />

                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Ce weekend est idéal pour faire certaines choses importantes !"
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <IconButton>
                      <ClearAllIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              </MenuList>
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
  )
}
