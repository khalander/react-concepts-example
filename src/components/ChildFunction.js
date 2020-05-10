import React from 'react';

const ChildFunction = (props) => (
    <button onClick={() => props.greetParent('frm child')}>Greet</button>
)

export default ChildFunction;
