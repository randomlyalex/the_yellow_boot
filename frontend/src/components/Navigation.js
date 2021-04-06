import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Link as RouterLink,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

//Material UI Components
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { IconButton } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

//Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';

//Actions
import { logout, loadUser } from '../redux/actions/authActions';
import { getBasket } from '../redux/actions/basketActions';

const Navigation = () => {
  const { basketItems } = useSelector((state) => state.basket);
  const { isAuthenticated, user, isLoading: userLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    user && isAuthenticated && !userLoading && dispatch(getBasket(user._id));
  }, [isAuthenticated, dispatch, user, userLoading]);

  const [tab, setTab] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const MainNav = () => {
    return (
      <>
        <Tab
          label="Women's"
          to="/cat/womens"
          component={RouterLink}
          onClick={() => setSideBarOpen(false)}
        />
        <Tab
          label="Men's"
          to="/cat/mens"
          component={RouterLink}
          onClick={() => setSideBarOpen(false)}
        />
        <Tab
          label="Kid's"
          to="/cat/kids"
          component={RouterLink}
          onClick={() => setSideBarOpen(false)}
        />
        <Tab
          label="Sale"
          to="/cat/sale"
          component={RouterLink}
          onClick={() => setSideBarOpen(false)}
        />
      </>
    );
  };

  const AccountNav = () => {
    return (
      <>
        <Tab
          label="My Orders"
          to="/my-account/my-orders"
          component={RouterLink}
        />
        <Tab
          label="My Details"
          to="/my-account/my-details"
          component={RouterLink}
        />
        <Tab label="Logout" onClick={handleLogout} />
      </>
    );
  };

  return (
    <>
      <Hidden mdUp>
        <aside>
          <Drawer
            anchor="left"
            open={sideBarOpen}
            onClose={() => setSideBarOpen(false)}>
            <Tabs
              value={tab}
              onChange={handleTab}
              indicatorColor="secondary"
              textColor="secondary"
              scrollButtons="desktop"
              orientation="vertical"
              variant="scrollable">
              <Tab label="Menu" disabled />
              <Divider />
              <MainNav />
              <Divider />
              {isAuthenticated && <AccountNav />}
            </Tabs>
          </Drawer>
        </aside>
      </Hidden>
      <nav>
        <AppBar
          position="relative"
          color="primary"
          style={{ marginBottom: '20px' }}>
          <Toolbar>
            <Hidden mdUp>
              <Grid item xs={1}>
                <Grid container justify="flex-start">
                  <IconButton onClick={() => setSideBarOpen(true)}>
                    <MenuIcon></MenuIcon>
                  </IconButton>
                </Grid>
              </Grid>
            </Hidden>
            <Grid item xs={1}>
              <Grid container justify="flex-start">
                <Button color="inherit" to="/" component={RouterLink}>
                  Logo
                </Button>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item xs={8} sm={10}>
                <Grid container justify="space-around">
                  <Tabs
                    value={tab}
                    onChange={handleTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    scrollButtons="desktop"
                    variant="fullWidth">
                    <Tab label="Home" to="/" component={RouterLink} />
                    <Switch>
                      <Route
                        path="/my-account/"
                        render={() => isAuthenticated && <AccountNav />}
                      />
                      <Route path="/" render={() => <MainNav />} />
                    </Switch>
                  </Tabs>
                </Grid>
              </Grid>
            </Hidden>
            <Grid item xs={10} md={2}>
              <Grid container justify="flex-end">
                {isAuthenticated ? (
                  <Button color="inherit" to="/basket" component={RouterLink}>
                    Basket {basketItems.items ? basketItems.items.length : null}
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </nav>
    </>
  );
};

export default Navigation;
