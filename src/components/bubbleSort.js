import React, { Component } from 'react';
import { RandomArray } from './RandomArray';

class BubbleSort extends Component {
  constructor() {
    super();
    this.ref = React.createRef()
    console.log('bubble sort')
    this.swap.bind(this)
    // generate bars
    this.lenOfRandomArray = 12  // length of random array
    this.randomArray = []
    for (let i = 0; i < this.lenOfRandomArray; i++) {
      this.randomArray.push(Math.floor(Math.random() * 12  + 1)) // generate num and push into the array
    }
    console.log(this.randomArray)
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
      if (this.randomArray[leftIndex] > this.randomArray[rightIndex]) {
        this.swap(leftIndex, rightIndex)
        console.log(`swap ${leftIndex} and ${rightIndex}`)
        await this.sleep(800)
        if (rightIndex + 1 < this.lenOfRandomArray && this.randomArray[rightIndex] > this.randomArray[rightIndex + 1]) {
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
      <RandomArray ref={this.ref} randomArray={this.randomArray}></RandomArray>
    )
  }
}
export default BubbleSort;
