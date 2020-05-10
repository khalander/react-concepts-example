import React from 'react';
import Person from './Person';

const NamedLists = () => {
    
    const persons = [
        {
            id:1,
            name: 'Rabia',
            age: 7,
            skills: 'React'
        },
        {
            id:2,
            name: 'Fathima',
            age: 7,
            skills: 'Vuejs'
        },
        {
            id:3,
            name: 'Mufeez',
            age: 7,
            skills: 'Angular'
        }
    ];
    const personList =  persons.map(person => {
                            return <Person 
                                key={person.id}
                                age={person.age}
                                skills={person.skills}
                                name={person.name} />
                        });
    return (
        <div>
            {personList}
        </div>
    )
}

export default NamedLists