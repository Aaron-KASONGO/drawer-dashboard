import { Typography, styled, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from "@mui/system";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

export const SallesPages = ({open}) => {
  return (
    <Main open={open}>
        <DrawerHeader />
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component='img'
                height={200}
                image='https://source.unsplash.com/random'
                alt='unsplash random'
              />
              <CardContent>
                <Typography variant="h6">Salle Marie Auxiliatrice</Typography>
              </CardContent>
              <CardActions>
                <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
                >
                  <IconButton disabled>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" disabled>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="error">
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component='img'
                height={200}
                image='https://source.unsplash.com/random'
                alt='unsplash random'
              />
              <CardContent>
                <Typography variant="h6">Salle Marie Auxiliatrice</Typography>
              </CardContent>
              <CardActions>
                <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
                >
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="error" disabled>
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    </Main>
  )
}
