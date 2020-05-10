import React from 'react'

import ForwardRefsChild from './ForwardRefsChild';
class ForwardRefsParent extends React.Component {

    constructor() {
        super()
        this.childRef = React.createRef();
    }

    clickHandler = () => {
        this.childRef.current.focus();
    }


    render() {
        return (
            <>
                <ForwardRefsChild ref={this.childRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </>
        );
    }
}

export default ForwardRefsParent;