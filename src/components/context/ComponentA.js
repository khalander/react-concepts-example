import React from 'react';
import ComponentB from './ComponentB';
import UserContext from './userContext';

class ComponentA extends React.Component {

    static contextType = UserContext;

    render() {
        return (
            <>
            user context {this.context}
            <ComponentB />
            </>
        )
    };
}

// ComponentA.contextType = UserContext;

export default ComponentA