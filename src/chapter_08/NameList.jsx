import React, {useState} from 'react';

const NameList = (props) => {
    const [name, setName] = useState('');
    const [rname, setRname] = useState([]);
    
    const handleSubmit = (e) => {
        setRname([...rname, name]);
        setName('');
        e.preventDefault();
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChange} />
            </label><br />
            <button type="submit">add</button><br />
            {/* <ul>
            {rname.map((x,index) => {
                return <li key={index}>{x}</li>
            })}
            </ul> */}
            <label>
                <select size={rname.length}>
                    {rname.map((x,index) => {
                        return <option key={index}>{x}</option>;
                    })}
                </select>
            </label>
        </form>
    )
}
export default NameList;