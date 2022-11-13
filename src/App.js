import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Contact from "./components/Introduction copy";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <About />
            <Experience />
            <Contact />
        </>


    )
}

export default App