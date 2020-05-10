import React from 'react'
import withCounter from './withCounter';

class ClickCounter extends React.Component {
    render() {
       ; const {count, incrementCount} = this.props;
        return (<h2>
            <button onClick={incrementCount} >Click</button>
            clicked {count} items</h2>)
    }
}

export default withCounter(ClickCounter, 10)