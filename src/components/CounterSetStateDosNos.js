import React from 'react';

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.incrementFiveHandler = this.incrementFiveHandler.bind(this) 
    }


    incrementHandler = () => {
        // this.state.counter = this.state.counter + 1; => No

        // this.setState({
        //     counter: this.state.counter + 1
        // }, () => {
        //     console.log('Callback' ,this.state.counter); 
        // })


        this.setState( (prevState, props) => ({
            counter: prevState.counter + 1
        }))

        console.log(this.state.counter); // => No
    }


    incrementFiveHandler ()  {
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementFiveHandler}>Increment</button>
            </div>
        )
    }
}

export default Counter;