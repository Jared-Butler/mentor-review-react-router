import React, {Component} from 'react'

class RandomSuperhero extends Component {
    render(){
        return (
            <div>
                <h1>Hi! My name is {this.props.match.params.name}</h1>
            </div>
        )
    }
}

export default RandomSuperhero;