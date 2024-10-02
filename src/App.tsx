import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
