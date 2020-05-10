import React from 'react';

const ErrorHandlerHero = (props) => {

    if (props.name === 'some') {
        throw new Error('No match');
    }

    return (
        <h1>{props.name}</h1>
    );
}

export default ErrorHandlerHero;