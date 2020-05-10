import React, {useEffect, useRef} from 'react';

const UseRef = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    

    return (
        <input ref={inputRef} type="text" />
    )
}

export default UseRef;