import React from 'react';
import modalStyles from './modalStyles.css';

//eslint-disable-next-line
function Modal ({handler}) {
     return (
        <div style = {modalStyles} className="modal">
            <img src="./assets/img/bubblesort.png" alt="bubblesort" id="bubble"/>
            <p> Bubble sort is a simple sorting algorithm that repeatedly steps through the list, 
        compares adjacent elements and swaps them if they are in the wrong order. 
        The pass through the list is repeated until the list is sorted. 
        The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.</p>

            <button style = {modalStyles} onClick ={handler} className="modalCloseButton">x</button>
        </div>
     )

}
// var img = document.getElementById("buble");
// console.log(img.getAttribute("src"));
// console.log(img.src);
export default Modal;