import React, {useContext} from 'react'
import {userContext, channelContext} from './../../../src/App'

const ComponentC = () => {

    const user = useContext(userContext);
    const chanel = useContext(channelContext)

    return (
        <div>{user} {chanel}</div>
    )
}

export default ComponentC;