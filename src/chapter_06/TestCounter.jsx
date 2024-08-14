import React, {useState} from "react";

function TestCounter(props) {
    const [content, setContent] = useState("");
    const [str1, setStr1] = useState("");
    const handleChange = (e) => {
        setContent(e.target.value);
    }
    const handleSubmit = (e) => {
        setStr1(content);
        console.log(str1);
        e.preventDefault();
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <input type="text" onChange={handleChange} /><br />
                <button type="submit">Go</button><br />
                <input type="text" value={str1} readOnly />
            </div>
        </form>
    );
}
export default TestCounter;