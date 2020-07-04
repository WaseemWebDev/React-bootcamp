import React from "react";
import  './App.css'
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import {
  
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Switch>

    <Route exact path="/"
       component={Home}
    />
    <Route exact  path="/about"
       component={About}
    />
     <Route exact path="/contact"
       component={Contact}
    />
      
  </Switch>
  </>
    
     
    
  );
}

export default App;
