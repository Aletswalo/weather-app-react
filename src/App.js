import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Johannesburg" />
      <footer>
        This project was coded by{""} <a href="https://github.com/Aletswalo" target="_blank" className="text-decoration-none" rel="noreferrer"> Annah Letswalo </a>{""} and is {""}
        <a href="https://github.com/Aletswalo/weather-app-react" target="_blank" className="text-decoration-none" rel="noreferrer">
        open-sourced on GitHub
        </a> and <a href="https://teal-parfait-2800f2.netlify.app/" className="text-decoration-none">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );

}


