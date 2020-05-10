import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2': 
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return  initialState;
        default:
            return state
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>First counter{count.firstCounter}</div>
            <div>Second counter{count.secondCounter}</div>
            <button onClick={() => dispatch({type:'increment', value:3})}>Add</button>
            <button onClick={() => dispatch({type:'decrement', value:3})}>Sub</button>
            <button onClick={() => dispatch({type:'increment2', value:6})}>Add 2</button>
            <button onClick={() => dispatch({type:'decrement2', value:8})}>Sub 2</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
    )
}

export default ComplexCounter