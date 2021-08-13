import React, {useEffect, useState} from 'react';
import './App.css'
import Loader from './Loader';
import Home from './Home.js';
import Achievement from './Achievement';
import About from './About';

// import react-router-dom packages

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  const [hide, setHide] = useState("none");

  var x=sessionStorage.getItem("isLoaded");
  sessionStorage.setItem("isLoaded", 0);
  setTimeout(() => {
    sessionStorage.setItem("isLoaded", 1);
  }, 1000)

  return (
      

      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/achievement">
            <Achievement />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
      </Router>

  );
}

export default App;