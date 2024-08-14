import React,{useState} from "react";

const Gugudan = (props) => {
    const [num, setNum] = useState("");
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setNum(e.target.value);
    };

    const handleSubmit = (e) => {        
        const sum = [];
        for (let i = 1; i <= 9; i++) {
            sum.push(`${num} x ${i} = ${num * i}`);
        }
        setResult(sum);
        console.log(result);
        e.preventDefault();
    };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="number" onChange={handleChange} /><br />
                    <button type="submit">Go</button><br />
                </div>
            </form>
            <div>
                {result.map((x,index) => {
                    return (
                    <p key={index}>{x}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default Gugudan;