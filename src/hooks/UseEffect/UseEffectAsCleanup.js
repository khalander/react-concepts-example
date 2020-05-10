import React, {useState, useEffect} from 'react'

const UseEffectAsCleanup = (props) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const mouseOverHandler = (e) => {
        console.log('mouseOverHandler')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mouseover', mouseOverHandler);
        return () => {
            window.removeEventListener('mouseover', mouseOverHandler);
        }
    }, [])


    return (
        <>
            <div> X - {x}, Y - {y}</div>
        </>
    )
}

export default UseEffectAsCleanup;