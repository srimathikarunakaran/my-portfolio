import { Col, Container, Row, Button } from "react-bootstrap";
import pizza from './pizza.png';
import weather from './weather.jpeg'
import './Project.css'

export default function Project() {
  return (
    <>
      <section id="project">
        <Container >
          <h1 className="text-info fw-bolder mt-5">Projects</h1>
          <Row className="project"  xs={1} md={3} >
          <Col className="pro" style={{ textAlign: "center", paddingTop: "40px" }}>
              <img src={pizza} alt="" className="img-fluid" />
              <h2 className="text-info">Pizza Shop(React-Bootstrap)</h2>
              <p>Built a Pizza Shop website using React and Bootstrap, <br />showcasing my skills in frontend development and responsive design</p>
              
              <Button variant="info">
              <a href="https://pizza-shop-react-boot-web.netlify.app/">check here</a>

              </Button>
            </Col>

            <Col className="pro" style={{ textAlign: "center", paddingTop: "40px", }}>
              <img src={weather} alt="" className="img-fluid" />
              <h2 className="text-info">Real-Time Weather App</h2>
              <p>Built a dynamic weather application to provide live weather updates for any location. <br />
               Focused on user-friendly interface, responsive layout, and seamless API integration.</p>
              
              <Button variant="info">
              <a href="https://simple-1-weather-app.netlify.app/">check here</a>

              </Button>
            </Col>

            
            
          </Row>
        </Container>
      </section>
    </>
  )
}