import { Col, Container, Row } from "react-bootstrap";
import Anime from './Anime.png';
import './About.css'

export default function About() {
  return (
    <>
      <section id="about">
        <Container className="about">
          <Row>
            <Col xs={12}>
              <h1 className="text-info fw-bolder">About Me</h1>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="text-center">
              <img src={Anime} alt="" className="img-fluid w-75 px-4" style={{ borderRadius: "50%" }} />
            </Col>
            <Col md={6} sm={12}>
              <div className="aboutdesc">
                <div className="abc">
                  <h3 className="text-info">Frontend Developer</h3>
                  <p>I'm a frontend developer with experience in building responsive websites.</p>
                </div>
                <div className="abc">
                  <h3 className="text-info">BCA Graduate</h3>
                  <p>I've completed Bachelor of Computer Application in ICW college.</p>
                </div>
                <div className="abc">
                  <h3 className="text-info">React Web Developer</h3>
                  <p> React Web developer with experience in building responsive websites.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

