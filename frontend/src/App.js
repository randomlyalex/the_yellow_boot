import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import HeaderBar from './components/HeaderBar';
import Navigation from './components/Navigation';

//Containers

function App() {
  return (
    <Router>
      <HeaderBar></HeaderBar>
      <Navigation></Navigation>
      {/* Top Navbar - Desktop */}
      {/* SideDrawer - Mobile */}
      {/* HomeScreen */}
      {/* Product Screen */}
      {/* Basket Screen */}
    </Router>
  );
}

export default App;
