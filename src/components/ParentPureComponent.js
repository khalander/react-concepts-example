import React from 'react';

import PureComponents from './PureComponents';
import RegularComponent from './RegularComponent';
import MemoComponents from './MemoComponents';

class ParentPureComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'Mufeez'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Mufeez'
            })
        }, 1000)
    }

    render() {
        return (
            <div>

                <PureComponents />
                <RegularComponent />
                <MemoComponents />
            </div>
        )
    }
}

export default ParentPureComponent;