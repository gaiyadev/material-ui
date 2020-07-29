import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Navbar from './components/Layout/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} ></Route>
        <Route path="/about" exact component={About}   ></Route>
        <Route path="/contact" exact component={Contact} ></Route>
        <Route path="/services" exact component={Services} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
