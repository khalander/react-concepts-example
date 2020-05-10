import React, {useState} from 'react'

const ArrayUseState = (props) => {

    const [items, setItems] = useState([]);

    const itemHandler = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)
        }])
    }

    return (
        <>
            <button onClick={itemHandler} >Add item</button>
            <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
            </ul>
        </>
    )

}

export default ArrayUseState;