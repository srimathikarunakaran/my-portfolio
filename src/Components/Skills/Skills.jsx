import { Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import html from './html.png';
import css from './css.png';
import js from './js.png';
import react from './react.png';
import bootstrap from './bootstrap.png';
import './Skill.css'


export default function Skills()
{
    return(
        <>
        <section id="skill">

            <Container fluid className="">
            <h1 className="text-info fw-bolder mt-5">Skills</h1>

                <Row className="skill" md={4} sm={6} lg={2} xs={6} >

                

            
                      <Card style={{width:"160px",   }} className="skillimg" > 
                       <Card.Img  src={html}  />
                     <Card.Body>
                        <Card.Title className="text-white" >HTML</Card.Title>
                     </Card.Body>
                       </Card>


                         <Card style={{width:"160px"}} className="skillimg"> 
                         <Card.Img variant="top" src={css} />
                       <Card.Body>
                          <Card.Title className="text-white">CSS</Card.Title>
                       </Card.Body>
                        </Card>

                       <Card style={{width:"160px"}} className="skillimg">
                        <Card.Img variant="top" src={js} />
                      <Card.Body>
                         <Card.Title className="text-white">Java Script</Card.Title>
                      </Card.Body>
                       </Card>

                       <Card style={{width:"160px"}} className="skillimg">
                        <Card.Img variant="top" src={react} />
                      <Card.Body>
                         <Card.Title className="text-white">React</Card.Title>
                      </Card.Body>
                       </Card>

                       <Card style={{width:"160px"}} className="skillimg">
                        <Card.Img variant="top" src={bootstrap} />
                      <Card.Body>
                         <Card.Title className="text-white">Bootstrap</Card.Title>
                      </Card.Body>
                       </Card>

                </Row>


            </Container>

                

                   

        </section>
        
        
        </>
    )
}