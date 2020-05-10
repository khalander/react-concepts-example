import React from 'react';

// function Greet() {
//     return <p>Hello world</p>
// }

const Greet = (props) => <p>Hello World from arrow function {props.name} =><br/>{props.children}</p>

export default Greet