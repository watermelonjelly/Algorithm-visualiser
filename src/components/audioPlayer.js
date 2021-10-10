import React from "react";
import note1 from "../assets/notes/A.mp3";
import note2 from "../assets/notes/Ab.mp3";
import note3 from "../assets/notes/B.mp3";
import note4 from "../assets/notes/Bb.mp3";
import note5 from "../assets/notes/C.mp3";
import note6 from "../assets/notes/D.mp3";
import note7 from "../assets/notes/Db.mp3";
import note8 from "../assets/notes/E.mp3";
import note9 from "../assets/notes/Eb.mp3";
import note10 from "../assets/notes/F.mp3";
import note11 from "../assets/notes/G.mp3";
import note12 from "../assets/notes/Gb.mp3";

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio src={note2} controls autoPlay/>
      </div>
    );

  }
}

export default AudioPlayer;
