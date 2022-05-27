import React from "react";
import memories from "./images/memories.png";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import Toolbar from '@mui/material/Toolbar';

const App = () => {
  const classes = useStyles();

  return(
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar >
          <Typography className={classes.heading} variant="h4" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60"/>
        </Toolbar>
      </AppBar>
      <Grow in> 
        <Container>
          <Grid container justify="space-between" aignItems="stretch" spacing={3}>
            <Grid items xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid items xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;

//39min