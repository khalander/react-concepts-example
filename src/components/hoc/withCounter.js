import React from 'react'

const withCounter = (WrappedComponent, incrementBy) => {
    class WithCounter extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementBy
                }
            })
        }


        render() {
            return (
                <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}/>
            )
        }
    }
    return WithCounter;
}

export default withCounter