import React from "react";
import Home from "./components/Home";
import './App.css'
import Navbar from "./components/Navbar";
import Documentation from "./components/Documentation";
import Team from "./components/Team";
import Precesion from "./components/Precision";

function App() {

  return (
    <>
      <div>
        <Navbar/>
       <Home/>
       <Documentation/>
       <Precesion/>
       <Team/>
      </div>
    </>
  )
}

export default App
