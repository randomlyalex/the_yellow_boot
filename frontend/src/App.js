import './App.css';
import React from 'react';
import { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
//Components
import HeaderBar from './components/HeaderBar';
import Navigation from './components/Navigation';
import HomeContainer from './containers/HomeContainer';
import ResultsContainer from './containers/ResultsContainer';
import UserAccountContainer from './containers/UserAccountContainer';
import StoreLocator from './containers/StoreLocator';
import BasketContainer from './containers/BasketContainer';
import FooterBar from './components/FooterBar';
import HelpContainer from './containers/HelpContainer';
import ProductDetail from './containers/ProductDetail';

//Containers

//MUI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); dark mode

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          // type: prefersDarkMode ? 'dark' : 'light', dark mode
          primary: {
            main: '#b71c1c',
          },
          secondary: {
            main: '##ff8a80',
          },
        },
      })
    // [prefersDarkMode] darkmode
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <header>
          <HeaderBar />
        </header>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" render={() => <HomeContainer />} />
            <Route exact path="/cat/:cat" component={ResultsContainer} />
            <Route path="/basket" render={() => <BasketContainer />} />
            <Route
              exact
              path="/product/detail/:pid"
              component={ProductDetail}
            />
            <Route path="/my-account" render={() => <UserAccountContainer />} />
            <Route path="/help" render={() => <HelpContainer />} />
            <Route path="/stores" render={() => <StoreLocator />} />
            <Route exact path="/404" render={() => <p>404 page not found</p>} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <footer>
          <FooterBar />
        </footer>
        {/* Top Navbar - Desktop */}
        {/* SideDrawer - Mobile */}
        {/* HomeScreen */}
        {/* Product Screen */}
        {/* Basket Screen */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
