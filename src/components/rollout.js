import React from 'react';
import "./rolloutStyle.css";
import {Button} from 'react-bootstrap';

function rollout(props) {
    
    const myFunction =() =>{
        window.location.reload();
    }

    return (
        <div>
            <div id = "animated-example" class = "animated rollOut"></div>
            <Button variant="btn btn-outline-secondary btn-lg btn-block" onClick ={()=>{myFunction()}}>New visualizer is coming soon. See you next time.</Button>
        </div>
    );
}

export default rollout;