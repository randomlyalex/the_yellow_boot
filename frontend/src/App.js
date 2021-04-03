import './App.css';
import { useState } from 'react';
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

function App() {
  return (
    <Router>
      <header>
        <HeaderBar />
      </header>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route path="/womens" render={() => <ResultsContainer />} />
          <Route path="/mens" render={() => <ResultsContainer />} />
          <Route path="/kids" render={() => <ResultsContainer />} />
          <Route path="/sale" render={() => <ResultsContainer />} />
          <Route path="/basket" render={() => <BasketContainer />} />
          <Route exact path="/product/:id" render={() => <ProductDetail />} />
          <Route path="/my-account" render={() => <UserAccountContainer />} />
          <Route path="/help" render={() => <HelpContainer />} />
          <Route path="/stores" render={() => <StoreLocator />} />
          <Route exact path="/404" render={() => <p>404 page not found</p>} />
          <Redirect to="/404" />

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
  );
}

export default App;
