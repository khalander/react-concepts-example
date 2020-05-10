import React, {useContext} from 'react'

import {CountContext} from '../../../App';
const ComponentA = () => {

    const contextContext = useContext(CountContext);

    return (
        <>
        <div>{contextContext.countState}</div>
        <button onClick={() => contextContext.countDispatch('increment')}>Add</button>
        <button onClick={() => contextContext.countDispatch('decrement')}>Sub</button>
        <button onClick={() => contextContext.countDispatch('reset')}>Reset</button>
    </>
    )
}

export default ComponentA;