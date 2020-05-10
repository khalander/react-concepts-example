import React, {useState, useEffect, useRef} from 'react';

const Timer = () => {

    const [time, setTime] = useState(0)
    const timeRef = useRef();

    useEffect(() =>{
        timeRef.current = setInterval( () => {
            setTime(prevTime => prevTime + 1)
        }, 1000)

        return () => {
            clearInterval(timeRef.current)
        }

    }, [])

    return (
        <>
            <h1>{time}</h1>Timer
            <button onClick={ () => clearInterval(timeRef.current)}>clear</button>
        </>
    )

}

export default Timer