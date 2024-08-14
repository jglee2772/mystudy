import React from 'react';

const TextConvert = (props) => {
    const handleChange = (e) => {
        props.onTextChange(e.target.value);
    }

    return (
        <div>
            <input type="text" value={props.content} onChange={handleChange} /><br />
        </div>
    )
}
export default TextConvert;