import React from "react";
import ReactDOM from 'react-dom/client';

function Clock() {
    return (
        <div>
            <h1>안녕 리액트</h1>
            <h2>현재시각: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock;