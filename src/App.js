import React, {useState}from 'react';
import './App.css';

import { Container,Button } from 'react-bootstrap';

import BubbleSort from './components/bubbleSort';
import Slider from './components/Slider';
import PopModal from './components/PopModal';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CardsProvider from './components/cardsProvider';

import Mentor from './assets/img/mentor.png';
import Mentee from './assets/img/mentee.png';



function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="AppContainer">
      <Navbar></Navbar>
      <Container className="Carousel">
        <Slider></Slider>
      </Container>

      <Container id="#cardTank">
        <CardsProvider></CardsProvider>
      </Container>

      <Container>
        <CardsProvider></CardsProvider>
      </Container>
  
      <div className="demo" id="algo">
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Bubble Sort
        </Button>
        <PopModal
          show={modalShow}
          onHide={() => setModalShow(false)}>
        </PopModal>
        <div className="Mentor">
          <img src={Mentor} alt="character1" id="mentor1"/>
        </div>
        <div className="Mentee">
          <img src={Mentee} alt="character2" id ="mentee1"/>
        </div>
        <div className="arraybars">
          <BubbleSort></BubbleSort>
        </div>
      </div>

      <Footer></Footer>
    </Container>
  );
}

export default App;