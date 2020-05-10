import React from 'react'

const Count = (props) => {
    console.log('Count component rendering', props.text)
    return (
        <h3>{props.text} : {props.count}</h3>
    )
}

export default React.memo(Count)