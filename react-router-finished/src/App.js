import React, { Component } from 'react';
import routes from "./routes"
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    
    let superhero = "Star Lord"

    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to={`/superhero/${superhero}`}>Superhero</Link>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
