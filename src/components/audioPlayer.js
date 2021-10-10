import { findAllByTestId } from "@testing-library/dom";
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

  constructor(props) {
    super(props);

    this.state = {
      play: false
    };

    this.audioList= [note1,note2,note3];//this array only for test,need to import audioList from bubblesort swap
    this.audio = new Audio(this.audioList[0]);
    this.audio.addEventListener('ended', this.updateAudio.bind(this), false);
    this.audio.play();
    console.log(this.audio);
  }

  updateAudio() {
      for(let i=1; i<this.audioList;i++){
      this.audio = new Audio(this.audioList[i]);
      this.audio.play();
      console.log(this.audio);
      }
  }

  // togglePlay() {
  //   const wasPlaying = this.state.play;
  //   this.setState({
  //     play: !wasPlaying
  //   });

  //   if (wasPlaying) {
  //     this.audio.pause();
  //   } else {
  //     this.audio.play()
  //   }
  // }
  render() {
    return (
      <div>
        <audio controls autoPlay></audio>
      </div>
    );
  }
}

export default AudioPlayer;
