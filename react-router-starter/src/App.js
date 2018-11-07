import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link} from 'react-router-dom'
import routes from "./routes"

class App extends Component {
  render() {

    let hero = "Thor"

    return (
      <HashRouter>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
