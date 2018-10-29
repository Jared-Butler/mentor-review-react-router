import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Staff from './Staff'
import History from './History'
import AboutUs from './AboutUs'

class About extends Component{
    render(){
        return (
            <div>
                <div>
                    <h1>About</h1>
                    <Link to="/about">About</Link>
                    <Link to="/about/staff">Meet the Staff</Link>
                    <Link to="/about/history">Our History</Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/about" component={AboutUs}/>
                        <Route path="/about/staff" component={Staff}/>
                        <Route path="/about/history" component={History}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default About