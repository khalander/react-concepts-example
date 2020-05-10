import React from 'react';

import useCounter from './useCounter';

const Counter = () => {

    const [count, incremenet, decrement, reset] = useCounter(2, 5)

    // const [count, setCount] = useState(0)

    // const incremenet = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    return (
        <>
            Count: {count}
            <button onClick={incremenet} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={reset} >Reset</button>
        </>
    )

}

export default Counter

