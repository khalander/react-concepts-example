import React from 'react';
import withCounter from './withCounter';


class HoverComponent extends React.Component {
    render() {
        const {count, incrementCount, name} = this.props;
        return (<h2 onMouseOver={incrementCount}>Hovered {name} {count} items</h2>)
    }
}

export default withCounter(HoverComponent, 5);