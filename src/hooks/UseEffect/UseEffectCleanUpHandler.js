import React, {useState} from 'react'
import UseEffectAsCleanup from './UseEffectAsCleanup';

const UseEffectCleanUpHandler = (props) => {

    const [display, setDisplay] = useState(true);

    return (
       <>
       <button onClick={() => setDisplay(!display)}>Click</button>
       {display && <UseEffectAsCleanup />}        
       </> 
    )
}

export default UseEffectCleanUpHandler;