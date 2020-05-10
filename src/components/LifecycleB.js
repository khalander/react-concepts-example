import React from 'react';

class LifecycleB extends React.Component {


    constructor() {
        super();
        this.state = {
            name: 'Mufeez'
        }
        console.log('Construtor - Lifecycle B');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps - Lifecycle B');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount - Lifecycle B');
    }

    render() {
        console.log('Render - Lifecycle B')
        return (
            <div>              
            </div>
        )
    }

}

export default LifecycleB;