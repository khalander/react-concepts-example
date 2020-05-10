import React from 'react';

import RefsDemo from './RefsDemo';

class RefsParent extends React.Component {

    constructor() {
        super()
        this.componentRefs = React.createRef();
    }

    parentHandler = () => {
        this.componentRefs.current.fromParent();
    }

    render() {
        return (
            <>
                <RefsDemo ref={this.componentRefs} />
                <button onClick={this.parentHandler} >Click on parent</button>
            </>
        )
    }
}

export default RefsParent;