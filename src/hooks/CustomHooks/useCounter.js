import {useState} from 'react';

const useCounter = (initialValue, incrementValue) => {

    const [count, setCount] = useState(initialValue)

    const incremenet = () => {
        setCount(prevCount => prevCount + incrementValue)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - incrementValue)
    }

    const reset = () => {
        setCount(0)
    }

    return [
        count,
        incremenet,
        decrement,
        reset
    ]

}

export default useCounter

