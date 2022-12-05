import React from "react";
import './App.css';
import Header from "./components/Header";
import YellowSection from "./components/YellowSection";
import FinalSection from "./components/FinalSection";

function App(){
    return (
        <div className="App">
            <Header/>
            <YellowSection/>
            <FinalSection/>
        </div>
    );
}

export default App;
