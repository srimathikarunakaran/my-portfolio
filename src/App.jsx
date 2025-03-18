import { Container } from "react-bootstrap";
import Contact from "./Components/Contact/Contact";
import About from "./Components/Navbar/About/About";
import Hero from "./Components/Navbar/Hero/Hero";
import Header from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import './index.css'

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