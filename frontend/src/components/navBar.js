import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

//Material UI Components
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { IconButton } from '@material-ui/core';

//Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
  return (
    <div>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Hidden mdUp>
            <Grid item xs={1}>
              <Grid container justify="flex-start">
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item xs={1}>
            <Grid container justify="flex-start">
              <Button color="inherit" to="/" component={RouterLink}>
                LOGO
              </Button>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item xs={8} sm={10}>
              <Grid container justify="space-around">
                <Button color="inherit" to="/womens" component={RouterLink}>
                  Women's
                </Button>
                <Button color="inherit" to="/mens" component={RouterLink}>
                  Men's
                </Button>
                <Button color="inherit" to="/kids" component={RouterLink}>
                  Kid's
                </Button>
                <Button color="inherit" to="/sale" component={RouterLink}>
                  Sale
                </Button>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item xs={10} md={2}>
            <Grid container justify="flex-end">
              <Button color="inherit" to="/basket" component={RouterLink}>
                Basket
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
