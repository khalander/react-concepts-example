import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetchAllPost = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {               
            setPosts(response.data)
        })
        .catch(error => {
            this.setState({
                errorMessage: error.message
            })
        })
    });

    return (
        <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
        </ul>
    )
}

export default DataFetchAllPost;