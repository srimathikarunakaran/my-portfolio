import{ Container, Row, Col} from 'react-bootstrap';
import Anime from './Anime.webp'

export default function Hero()
{
    return(
        <>
        <section>
        <Container fluid className='hero' >
          <Row>
            <Col className='descol'sm={12} md={6}  >
              <h2 className='text-info text-start' style={{ fontSize: '2rem' }}>Hi, I'm Srimathi Karunakaran</h2>
              <br />
              <br />
              <p className='desc' style={{ fontSize: '1.2rem' }}>
                A passionate React.js developer with a solid foundation in HTML, CSS, and JavaScript. I love creating responsive, interactive, and visually appealing web applications, and I am always eager to explore new tools and techniques to build innovative digital experiences.
              </p>
              <a href="mailto:karunakaransrimathi3@gmail.com" className='descbtn'>
                Contact Me
              </a>
            </Col>
            <Col sm={12} md={6} className='heroimg' >
              <img src={Anime} alt="Anime" className='img-fluid w-75 rounded-5' />
            </Col>
          </Row>
        </Container>
      </section>
    
        
        </>
    )
}