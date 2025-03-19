import { Col, Container, Row, Button } from "react-bootstrap";
import seogram from './seogram.png';
import pizza from './pizza.png';
import './Project.css'

export default function Project() {
  return (
    <>
      <section id="project">
        <Container fluid>
          <h1 className="text-info fw-bolder mt-5">Projects</h1>
          <Row className="project" xs={1} md={2}>
            <Col style={{ textAlign: "center", paddingTop: "40px" }}>
              <img src={seogram} alt="" className="img-fluid" />
              <h2 className="text-info">Seogram </h2>
              <p>Recreated the Seogram website using HTML and CSS, <br />demonstrating my skills in frontend development and design replication.</p>
              <Button variant="info">
              <a href="https://seogram-first-website-project.netlify.app/">check here</a>
              </Button>
            </Col>
            <Col style={{ textAlign: "center", paddingTop: "40px" }}>
              <img src={pizza} alt="" className="img-fluid" />
              <h2 className="text-info">Pizza Shop</h2>
              <p>Built a Pizza Shop website using React and Bootstrap, <br />showcasing my skills in frontend development and responsive design</p>
              
              <Button variant="info">
              <a href="https://pizza-shop-react-boot-web.netlify.app/">check here</a>

              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}