import React from 'react';

class HoverComponent extends React.Component {
    render() {
        const {count, incrementCount} = this.props;
        return (<h2 onMouseOver={incrementCount}>Hovered {count} items</h2>)
    }
}

export default HoverComponent;