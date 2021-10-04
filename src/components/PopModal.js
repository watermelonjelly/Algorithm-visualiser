import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PopModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sorting Algorithm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Bubble Sort</h4>
          <img src="./assets/img/bubblesort.png" alt="bubble-img"/>
          <p>
          Bubble sort is a simple sorting algorithm that repeatedly steps through the list, 
          compares adjacent elements and swaps them if they are in the wrong order. 
          The pass through the list is repeated until the list is sorted. 
          The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

 
// var img = document.getElementById("buble");
// console.log(img.getAttribute("src"));
// console.log(img.src);
export default PopModal;