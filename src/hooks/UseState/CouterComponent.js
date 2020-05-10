import React, {useState} from 'react';

const CouterComponent = (props) => {

    const[count, setCount] = useState(0);

    return (
        <>
        <button onClick={ () => setCount(count+1)}>Without prev value: {count} </button>
        <button onClick={ () => setCount((prevState) => prevState + 1)}>With prev value: {count} </button>
        </>
    )
}

export default CouterComponent;