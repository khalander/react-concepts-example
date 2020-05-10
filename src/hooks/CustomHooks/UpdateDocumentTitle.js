import React, {useState} from 'react'

import useDocumentTitle from './useDocumentTitle';

const UpdateDocumentTitle = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useEffect(() =>{
    //     console.log('updated click');
    //     document.title = `you clicked times: ${count}`
    // }, [count]);

    useDocumentTitle(count)

    return (
        <>
            <button onClick={() => setCount(prev => prev+1)}>Clicked: {count}</button>
            <input type="text" value={name}  onChange={e => setName(e.target.value)}/>
        </>
        
    )
}

export default UpdateDocumentTitle;