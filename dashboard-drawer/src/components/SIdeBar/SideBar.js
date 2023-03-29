import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


export const SideBar = () => {
  return (
    <Box
    flex={1}
    display={{
        xs: 'none',
        sm: 'block'
    }}
    p={2}
    >
        <Box
        position='fixed'
        >
            <List
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary='File' />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary='Messages' />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsActiveIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notifications' />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary='Location' />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <LeaderboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Graph' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}
