import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

//Material UI Components
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const HeaderBar = () => {
  return (
    <header>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Grid container justify="space-between">
            <Hidden xsDown>
              <Button color="inherit" to="/email-signup" component={RouterLink}>
                Email Signup
              </Button>
              <Typography color="inherit" style={{ flex: 1 }}></Typography>
            </Hidden>
            <Button color="inherit" to="/help" component={RouterLink}>
              Help
            </Button>
            <Button color="inherit" to="/stores" component={RouterLink}>
              Store Locate
            </Button>
            <Button color="inherit" to="/my-account" component={RouterLink}>
              My Account
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default HeaderBar;
