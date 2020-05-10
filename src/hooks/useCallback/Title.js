import React from 'react'

const Title =() => {
    console.log('title component render');
    return (
        <h2>useCallback hook</h2>
    )
}

export default React.memo(Title) 