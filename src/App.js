import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <div className="container">
        <Weather defaultCity="Gabrovo" />
        <footer>
          {" "}
          This project is coded by{" "}
          <a
            href="https://viktoria-nikolova-portfolio.netlify.app"
            target="_blank "
            rel="noreferrer"
          >
            {" "}
            Viktoria{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/viki3612/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
