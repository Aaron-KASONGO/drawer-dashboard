import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import HomeIcon from '@mui/icons-material/Home';
import ChairIcon from '@mui/icons-material/Chair';
import ApartmentIcon from '@mui/icons-material/Apartment';
import UpdateIcon from '@mui/icons-material/Update';
import Groups2Icon from '@mui/icons-material/Groups2';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Drawer, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const DrawerSide = ({open, handleDrawerClose, theme}) => {
  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3
        }}
        >
            <Avatar sx={{
                width: 75,
                height: 75
            }} src='' alt='avatar' />
            <Box>
                <Typography variant='h6' textAlign='center'>Excellence KAWEJ</Typography>
                <Typography variant='subtitle2' textAlign='center'>email@esisalama.org</Typography>
            </Box>
        </Box>
        <Divider />
        <List>
            <Link to='/'>
              <ListItem disablePadding>
                <ListItemButton component='div'>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography comp>Acceuil</Typography>} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/file'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ChairIcon />
                  </ListItemIcon>
                  <ListItemText primary='Réservations' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/messages'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ApartmentIcon />
                  </ListItemIcon>
                  <ListItemText primary='Salles' />
                </ListItemButton>
              </ListItem>
            </Link>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary='Historique' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Groups2Icon />
                </ListItemIcon>
                <ListItemText primary='Clients' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Se déconnecter' />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
  )
}
