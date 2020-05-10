import React from 'react'

class ErrorBoundries extends React.Component {

    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
       if (this.state.hasError) {
           return <h1>Somethig went wrong</h1>
       } 
       return this.props.children
    }
}

export default ErrorBoundries;