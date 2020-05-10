import React , {useEffect, useReducer} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_SUCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error:'Something went wrong',
                posts: {}
            }
        default:
            return state
    }

}

const DataFetch = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => {
            console.log('esponse', response)
            dispatch({
                type: 'FETCH_SUCESS',
                payload: response.data
            })
        })
        .catch(error=> {
            dispatch({
                type: 'FETCH_ERROR'               
            })
        })  
    }, [])

    return (
        <>          
            {state.loading ? 'loading' : state.post.title }
            {state.error ? state.error : null}
        </>
    )
}

export default DataFetch;