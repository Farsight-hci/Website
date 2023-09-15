import './App.css';
import { Navbar, Container, Col, Carousel, Image, Row } from 'react-bootstrap';
import img_one from './assets/swarosim.png'
import img_two from './assets/crm.png'
import img_three from './assets/portfolio.png'
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">La casa di Lorenzo</Navbar.Brand>
        </Container>
      </Navbar>
      <Row className='px-5 py-3'>
        <Col xs={8}>
        <Carousel className='bg-black mx-5 my-2'>
          <Carousel.Item interval={5000}>
            <Image className='opacity-75 ' fluid src={img_one} />
            <Carousel.Caption>
              <h3>Swarosim</h3>
              <p>Un simulatore di flora e fauna.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Image className='opacity-75' fluid src={img_two} />
            <Carousel.Caption>
              <h3>CRM</h3>
              <p>Gestionale di constratti e documenti dei clienti.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Image className='opacity-75' fluid src={img_three} />
            <Carousel.Caption>
              <h3>Portfolio</h3>
              <p>Un sito web specializzato nel mostrare il proprio lavoro.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col className='d-flex flex-column align-items-start' xs={4}>
          <h1>Big text here</h1>
          <p> Very long text here</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
