import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Superhero from "./components/RandomSuperhero"

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)