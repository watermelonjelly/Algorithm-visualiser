import React, {useState}from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import BubbleSort from './components/bubbleSort';
import PopModal from './components/PopModal';
import Logo from './assets/img/logo.png';
import Mentor from './assets/img/mentor.png';
import Mentee from './assets/img/mentee.png';
import Slider from './components/Slider';


function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="AppContainer">
      <div className="Header">
        <img src={Logo} alt="header" />
      </div>
      <div className="Carousel">
        <Slider></Slider>
      </div>
      <div className="arraybars">
        <BubbleSort></BubbleSort>
      </div>
      <div className="Button">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Bubble Sort
      </Button>
      <PopModal
        show={modalShow}
        onHide={() => setModalShow(false)}>
      </PopModal>
        
      </div>
      <div className="Mentor">
        <img src={Mentor} alt="character1" id="mentor1"/>
      </div>
      <div className="Mentee">
        <img src={Mentee} alt="character2" id ="mentee1"/>
      </div>
    </div>
  );
}

export default App;