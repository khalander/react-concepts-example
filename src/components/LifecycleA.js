import React from 'react';

import LifecycleB from './LifecycleB';

class LifecycleA extends React.Component {


    constructor() {
        super();
        this.state = {
            name: 'Mufeez'
        }
        console.log('Construtor - Lifecycle A');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps - Lifecycle A');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount - Lifecycle A');
    }

    render() {
        console.log('Render - Lifecycle A')
        return (
            <div> 
                <LifecycleB />             
            </div>
        )
    }

}

export default LifecycleA;