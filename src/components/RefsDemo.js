import React from 'react';

class RefsDemo extends React.Component {

    constructor() {
        super()
        this.inputRef = React.createRef();
        this.clbRef = null;
        this.setClbRef = (element) => {
            this.clbRef = element;
        }
        this.inputChildRef = React.createRef();
    }


    componentDidMount() {
        // this.inputRef.current.focus();       
        // this.clbRef.focus();       
    }

    inputHandler = () => {
        alert(this.inputRef.current.value)
        if (this.clbRef) {
            alert(this.clbRef.value);
        }
    }

    fromParent = () => {
        this.inputChildRef.current.focus();
    }

    render() {
        return(
            <div>
                {/* <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setClbRef} />
                <button onClick={this.inputHandler}>click</button> */}

                <input type="text" ref={this.inputChildRef} />

            </div>
        )
    }
}

export default RefsDemo;