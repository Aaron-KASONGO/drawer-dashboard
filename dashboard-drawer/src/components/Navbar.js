
import { AppBar, IconButton, Toolbar, Box, Avatar, Badge, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Navbar = () => {
  return (
    <AppBar
    position='stick'
    >
        <Toolbar
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}
        >
            <Box>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <IconButton
                color='error'
                >
                    <YouTubeIcon sx={{
                        width: 35,
                        height: 35,
                    }}
                    />
                </IconButton>
            </Box>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <IconButton>
                    <Badge variant='dot' color='error'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton>
                    <Avatar src='' alt='avatar' />
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
