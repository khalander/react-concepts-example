import React from 'react'
import axios from 'axios';

class PostComponent extends React.Component {

    constructor() {
        super() ;
        this.state = {
            userId: '',
            body: '',
            title: ''
        }
    }    

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
        })
    }

    render() {
        const {userId, title, body} = this.state;
            return (
                <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div>
                            <input type="text" name="userId" value={userId} onChange={this.onChangeHandler}/>
                         </div>
                         <div>
                            <input type="text" name="title" value={title} onChange={this.onChangeHandler} />
                         </div>
                         <div>
                            <input type="text" name="body" value={body} onChange={this.onChangeHandler} />
                         </div>
                         <button type="submit">submit</button>
                    </form>
                </div>
            );
    }
}

export default PostComponent;