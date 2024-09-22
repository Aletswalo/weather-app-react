import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Johannesburg" />
      <footer>
        This project was coded by{""} <a href="https://github.com/Aletswalo" target="_blank"  rel="noreferrer"> Annah Letswalo </a>{""} and is {""}
        <a href="https://github.com/Aletswalo/weather-app-react" target="_blank"  rel="noreferrer">
        open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );

}


