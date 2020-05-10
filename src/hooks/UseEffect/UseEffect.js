import React, {useState, useEffect} from 'react'

const UseEffect = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() =>{
        console.log('updated click');
        document.title = `you clicked times: ${count}`
    }, [count]);

    return (
        <>
            <button onClick={() => setCount(prev => prev+1)}>Clicked: {count}</button>
            <input type="text" value={name}  onChange={e => setName(e.target.value)}/>
        </>
        
    )
}

export default UseEffect;