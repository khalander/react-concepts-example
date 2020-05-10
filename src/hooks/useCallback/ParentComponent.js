import React, {useState, useCallback} from 'react'

import Title from './Title';
import Button from './Button';
import Count from './Count';

const ParentComponent = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => {
        setAge(preAge => preAge + 10);
    }, [])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000);
    }, [])

    return (
        <> 
            <Title />
            <Count text="age" count={age} />
            <Button type="button" handleClick={incrementAge} >incrementAge</Button>

            <Count text="salary" count={salary} />
            <Button type="button" handleClick={incrementSalary} >incrementSalary</Button>

        </>
    )

}

export default ParentComponent