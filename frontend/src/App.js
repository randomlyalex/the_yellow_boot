import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';

//Containers

function App() {
  return (
    <Router>
      <HeaderBar></HeaderBar>
      <NavBar></NavBar>
      {/* Top Navbar - Desktop */}
      {/* SideDrawer - Mobile */}
      {/* HomeScreen */}
      {/* Product Screen */}
      {/* Basket Screen */}
    </Router>
  );
}

export default App;
