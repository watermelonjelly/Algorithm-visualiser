import React, {useState}from 'react';
import './App.css';
import BubbleSort from './components/BubbleSort';
import Modal from './components/modal';
import Logo from './assets/img/logo.png';
import Mentor from './assets/img/mentor.png';
import Mentee from './assets/img/mentee.png';


function App() {
  const[isOpen,setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }  
  return (
    <div className="AppContainer">
      <div className="Header">
        <img src={Logo} alt="header" />
      </div>
      <div className="arraybars">
        <BubbleSort></BubbleSort>
      </div>
      <div className="Button">
        {!isOpen?
        <button onClick={toggleModal} className="button">Bubble sort</button>
        :<Modal handler={toggleModal}>
        </Modal>
        }
        
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