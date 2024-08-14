import React from 'react';

const students = [
    {id:1, name:"aaa"},
    {id:2, name:'bbb'},
    {id:3, name:'ccc'},
    {id:4, name:'ddd'},
    {id:5, name:'eee'},
]
const Rollbook = (props) => {
    return (
        <ul>
            {students.map(x => {
                return <li key={x.id}>{x.name}</li>
            })}
        </ul>
    );
}
export default Rollbook;