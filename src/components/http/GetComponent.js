import React from 'react';
import axios from 'axios';

class GetComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            posts:[],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {               
               this.setState({
                   posts: response.data
               })
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.message
                })
            })
    }

    render() {
        const {posts, errorMessage} = this.state;
        console.log('response.data', posts);
        return (<div>
                {
                    posts.length > 0 ? 
                        posts.map(post => {
                            return <h4 key={post.id}>{post.title}</h4>
                        }) : null
                }
                {
                    errorMessage ? <h1>{errorMessage}</h1> : null
                }
        </div>);
    }
};

export default GetComponent