import React from 'react';

class ControlledComponents extends React.Component {

    constructor () {
        super()
        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    commentsHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    topicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    formHandler = event => {
        event.preventDefault();
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    }

    render() {
        const {topic, comments, userName} = this.state;
        return (
            <form onSubmit={this.formHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={this.userNameHandler} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.commentsHandler}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.topicHandler}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ControlledComponents;