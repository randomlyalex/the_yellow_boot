import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

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

//Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  const [tab, setTab] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleTab = (event, newTab) => {
    setTab(newTab);
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
              <Tab
                label="Menu"
                to="/womens"
                component={RouterLink}
                onClick={() => setSideBarOpen(false)}
                disabled
              />
              <Divider />
              <Tab
                label="Women's"
                to="/womens"
                component={RouterLink}
                onClick={() => setSideBarOpen(false)}
              />
              <Tab
                label="Men's"
                to="/mens"
                component={RouterLink}
                onClick={() => setSideBarOpen(false)}
              />
              <Tab
                label="Kid's"
                to="/kids"
                component={RouterLink}
                onClick={() => setSideBarOpen(false)}
              />
              <Tab
                label="Sale"
                to="/sale"
                component={RouterLink}
                onClick={() => setSideBarOpen(false)}
              />
            </Tabs>
          </Drawer>
        </aside>
      </Hidden>
      <nav>
        <AppBar position="relative" color="primary">
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
                  LOGO
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
                    <Tab label="Women's" to="/womens" component={RouterLink} />
                    <Tab label="Men's" to="/mens" component={RouterLink} />
                    <Tab label="Kid's" to="/kids" component={RouterLink} />
                    <Tab label="Sale" to="/sale" component={RouterLink} />
                  </Tabs>
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
      </nav>
    </>
  );
};

export default Navigation;
