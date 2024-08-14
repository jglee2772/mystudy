import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

const BoilingVerdict = (props) => {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}
const toCelsius = (e) => {
    return ((e - 32) * 5)/9;
}
const toFahrenheit = (e) => {
    return (e * 9)/5 + 32;
}
const tryConvert = (x,y) => {
    const input = parseFloat(x);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = y(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
const Calculator = (props) => {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");
    const handleCelsiusChange = (x) => {
        setTemperature(x);
        setScale("c");
    };
    const handleFahrenheitChange = (x) => {
        setTemperature(x);
        setScale("f");
    };
    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}
export default Calculator;