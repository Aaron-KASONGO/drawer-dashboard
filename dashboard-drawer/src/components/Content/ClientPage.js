import { Typography, styled, Grid, Card, CardContent, CardActions, Avatar, ButtonGroup, Button, Tooltip } from "@mui/material";

import LockPersonIcon from '@mui/icons-material/LockPerson';
import InfoIcon from '@mui/icons-material/Info';


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

export const ClientPage = ({open}) => {
  return (
    <Main open={open}>
        <DrawerHeader />
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 2
              }}
              >
                <Avatar src="" sx={{
                    width: 60,
                    height: 60,
                    my: 1
                }} alt="Avatar" />
                <Typography variant="body1">KALUNDA Jules</Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup
                orientation="horizontal"
                variant="outlined"
                size="small"
                fullWidth
                >
                    <Tooltip title="Détail du contact">
                        <Button>
                            <InfoIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Blocker le contact">
                        <Button color="error">
                            <LockPersonIcon />
                        </Button>
                    </Tooltip>
                </ButtonGroup>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
    </Main>
  )
}
