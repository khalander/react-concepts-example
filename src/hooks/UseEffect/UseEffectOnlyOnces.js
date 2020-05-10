import React, { useEffect, useState } from "react";

const useEffectOnlyOnces = (props) => {

    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('logMousePosition');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mouseover', logMousePosition)
    }, [])

    return (
        <div>X - {x} Y - {y}</div>
    )
}

export default useEffectOnlyOnces;