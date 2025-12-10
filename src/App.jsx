import { Container } from "react-bootstrap";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import './index.css'
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";

function App()
{
    return(
        <>

        <Container fluid className="app" >

        <Header />

        <Hero />

    <About />

<Skills />

<Project />

<Contact />

        </Container>
        
            
        
        
        </>
    )
}

export default App;