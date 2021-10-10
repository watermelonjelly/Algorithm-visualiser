import React, {useState}from 'react';
import './App.css';

import { Container,Button } from 'react-bootstrap';

import BubbleSort from './components/bubbleSort';
import Slider from './components/Slider';
import PopModal from './components/PopModal';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CardsProvider from './components/cardsProvider';
import AudioPlayer from './components/audioPlayer';
import Rollout from './components/rollout';

import Mentor from './assets/img/mentor.png';
import Mentee from './assets/img/mentee.png';



function App() {
  const [modalShow, setModalShow] = useState(false);
  const [barShow, setBarShow] = useState(false);
  const toggleBarShow = () => {
    setBarShow(!barShow);
  };

  return (
    <Container className="AppContainer">
      <Navbar></Navbar>
      <Slider></Slider>
      <div id="cardTank">
        <CardsProvider></CardsProvider>
      </div>

      <Container className="mt-5" id="algo">
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
          <Container className="arraybars mr-2">
            <Button variant="outline-success mr-2" active onClick={() => setModalShow(true)}>
              What is Bubble Sort?
            </Button>
            <Button variant="outline-info mr-2" active onClick={() => {toggleBarShow()}}>
              Let's get start Visualizer!
            </Button>
            {barShow && 
            <BubbleSort></BubbleSort>}
          </Container>
      </Container>
      <Rollout></Rollout>
      <Footer></Footer>
    </Container>
  );
}

export default App;