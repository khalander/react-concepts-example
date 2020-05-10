import React, {Component} from 'react';

class Welcome extends Component {
    render () {
        return <p>I am from Class components {this.props.name}</p>
    }
}

export default Welcome;