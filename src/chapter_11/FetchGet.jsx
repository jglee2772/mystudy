import React, {useState, useEffect} from "react";

const FetchGet = (props) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch("http://localhost:8081/menulist",
                    {
                        method:"POST",
                        header: {
                            "content-Type":"application/json",
                        }   
                    }
                );
                const jsonData = await result.json();
                setData(jsonData);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if(loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error:{error.message}</div>;
    }
    const names = data.map((x) => {
        return `${x.name} `;
    })
    return (
        <div>
            <h1>Fetched Data:</h1>
            <select size={data.length}>
            {data.map((x) => {
                return <option key={x.id}>{x.name} : {x.price}</option>;
            })}
            </select>
        </div>
    )
}
export default FetchGet;