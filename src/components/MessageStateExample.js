import React, {Component} from 'react';

class MessageStateExample extends Component {

    constructor() {
        super()
        this.state = {
            'message': 'Welcome Visitor'
        }
    }

    messageHandler = () => {
        this.setState({
            'message': 'Thanks for subscriptions'
        })
    }

    render() {
        return (<div>
                <p>{this.state.message}</p>
                <button onClick={this.messageHandler}>click</button>
                </div>);
    }

}

export default MessageStateExample;
