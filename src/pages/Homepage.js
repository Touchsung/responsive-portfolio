import About from "../components/About";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Social from "../components/Social";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <About />
            <Experience />
            <Contact />
            <Social />
        </>



    )
}

export default Homepage