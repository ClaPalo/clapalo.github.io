import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
    return (
            <>
                <Navbar />
                <Home />
                <About />
                <Projects />
                <Footer />
            </>
    );
}

export default App;
