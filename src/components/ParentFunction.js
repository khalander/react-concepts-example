import React from 'react';
import ChildFunction from './ChildFunction'

class ParentFunction extends React.Component {

    greetParent (child) { 
        alert('Hello' + child)
    }

    render() {
        return <div><ChildFunction greetParent={this.greetParent} /></div>
    }
}

export default ParentFunction;