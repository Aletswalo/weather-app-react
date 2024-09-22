import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function displayFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
      return (
    <span className="WeatherTemperature">
             <span className="temperature"> {Math.round(props.celsius)}
                    </span>
                    <span className="unit">°C | <a href="/" onClick={displayFarenheit} className="text-decoration-none">°F</a></span>
    </span> 
      ); 
    } else {
        let farenheit = (props.celsius * 9) / 5 + 32;
        return (
            <span className="WeatherTemperature">
                <span className="temperature">{Math.round(farenheit)} </span>
                <span className="unit"><a href="/" onClick={displayCelsius} className="text-decoration-none">°C</a> | °F</span>
            </span>
        )
    }
}