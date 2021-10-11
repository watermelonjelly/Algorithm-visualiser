import React, { Component } from 'react';
import { RandomArray } from './RandomArray';
import AudioPlayer from './audioPlayer';

class BubbleSort extends Component {
  constructor() {
    super();
    this.ref = React.createRef()
    console.log('bubble sort')
    this.swap.bind(this)
    
    this.orderArray=[
      {num:1, note:'A', url:'../assets/notes/A.mp3'},
      {num:2, note:'Ab', url:'../assets/notes/Ab.mp3'},
      {num:3, note:'B', url:'../assets/notes/B.mp3'},
      {num:4, note:'Bb', url:'../assets/notes/Bb.mp3'},
      {num:5, note:'C', url:'../assets/notes/C.mp3'},
      {num:6, note:'D', url:'../assets/notes/D.mp3'},
      {num:7, note:'Db', url:'../assets/notes/Db.mp3'},
      {num:8, note:'E', url:'../assets/notes/E.mp3'},
      {num:9, note:'Eb', url:'../assets/notes/Eb.mp3'},
      {num:10, note:'F', url:'../assets/notes/F.mp3'},
      {num:11, note:'G', url:'../assets/notes/G.mp3'},
      {num:12, note:'Gb', url:'../assets/notes/Gb.mp3'}
    ]
    this.randomArray = []
    this.lenOfRandomArray = 12
    
    for(let i=0; i<this.lenOfRandomArray;i++){
      let randomIndex = Math.floor(Math.random()*this.orderArray.length);
      this.randomArray.push(this.orderArray[randomIndex]);
      this.orderArray.splice(randomIndex,1);
    }
    
    this.audioList =[]
    // for(let i=0; i<this.lenOfRandomArray;i++){
    //   this.audioList.push(this.randomArray[i].url);

    // }
    console.log(this.randomArray);
    console.log(this.audioList);
  }


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async swap(leftIndex, rightIndex) {
    // when rightIndex greater than leftIndex
    // swap the position，use add class/remove class for AnimationEffect
    const children = this.ref.current.children
    children[leftIndex].classList.add('move-right') // greater div move to the right
    children[rightIndex].classList.add('move-left') // little dive move to the left
    const tmp = this.randomArray[leftIndex]
    // index swap
    this.randomArray[leftIndex] = this.randomArray[rightIndex]
    this.randomArray[rightIndex] = tmp
    setTimeout(() => {
      // swap div position in html
      this.ref.current.insertBefore(children[rightIndex], children[leftIndex])
      children[leftIndex].classList.remove('move-left')
      children[rightIndex].classList.remove('move-right')
      leftIndex += 1
      rightIndex += 1
    }, 800)
  }

  async checking(leftIndex, rightIndex, ms) {
    if (rightIndex >= this.lenOfRandomArray) {
      return
    }
    this.ref.current.children[leftIndex].classList.add('checking')
    this.ref.current.children[rightIndex].classList.add('checking')
    await this.sleep(ms)
    this.ref.current.children[leftIndex].classList.remove('checking')
    this.ref.current.children[rightIndex].classList.remove('checking')
  }

  async componentDidMount() {
    let leftIndex = 0
    let rightIndex = 1
    let indexOfLastSortedNum = this.lenOfRandomArray

    while (rightIndex < indexOfLastSortedNum) {
      // if left side is greater than rightside, swap the position
      if (this.randomArray[leftIndex].num > this.randomArray[rightIndex].num) {
        this.swap(leftIndex, rightIndex)
        console.log(`swap ${leftIndex} and ${rightIndex}`)
        this.audioList.push( 'note'+this.randomArray[leftIndex].num.toString())
        this.audio = new Audio(this.audioList[-1])
        this.audio.play();
        console.log(this.audio);
        this.audioList.push( 'note'+this.randomArray[rightIndex].num.toString())
        this.audio = new Audio(this.audioList[-1])
        this.audio.play();
        console.log(this.audio);
        console.log(this.audioList)
        await this.sleep(800)
        if (rightIndex + 1 < this.lenOfRandomArray && this.randomArray[rightIndex].num > this.randomArray[rightIndex + 1].num) {
          this.checking(rightIndex, rightIndex + 1, 300)
          await this.sleep(300)
        }
      } else {
        this.checking(leftIndex, rightIndex, 800)
        await this.sleep(800)
      }
      if (rightIndex + 1 === indexOfLastSortedNum) {
        this.ref.current.children[rightIndex].classList.add('done')
        leftIndex = 0
        rightIndex = 1
        indexOfLastSortedNum -= 1
        continue
      }
      leftIndex += 1
      rightIndex += 1
    }
    this.ref.current.children[0].classList.add('done')
    console.log(this.randomArray)
  }


  render() {
    return (
      <div>
        <RandomArray ref={this.ref} randomArray={this.randomArray}></RandomArray>
      </div>
    )
  }
}
export default BubbleSort;
