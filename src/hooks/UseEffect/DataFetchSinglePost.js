import React, {useState, useEffect} from 'react';
import axios from 'axios';


const DataFetchSinglePost = () => {

    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idb, setIdb] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idb}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(error=> console.log(error))  
    }, [idb]);

    const clickHandler = () => {
        setIdb(id)
    }

    return (
       <>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={clickHandler}>click</button>
        {post.title}
       </>
    )
}

export default DataFetchSinglePost;