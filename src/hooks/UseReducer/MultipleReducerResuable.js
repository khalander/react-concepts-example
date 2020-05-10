import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value}      
        case 'reset':
            return  initialState;
        default:
            return state
    }
}

const MultipleReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatch2] = useReducer(reducer, initialState);

    return (
        <>
            <div>First counter{count.firstCounter}</div>
            <div>Second counter{countTwo.firstCounter}</div>
            <button onClick={() => dispatch({type:'increment', value:3})}>Add</button>
            <button onClick={() => dispatch({type:'decrement', value:3})}>Sub</button>
            <button onClick={() => dispatch2({type:'increment', value:6})}>Add 2</button>
            <button onClick={() => dispatch2({type:'decrement', value:8})}>Sub 2</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
    )
}

export default MultipleReducer