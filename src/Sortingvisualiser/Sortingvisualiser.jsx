import React from "react";
import './Sortingvisualiser.css';
import {getMergeSortAnimations} from '../Sortingalgorithms/Sortingalgorithms.js';
import *as Sortingalgorithms from '../Sortingalgorithms/Sortingalgorithms.js' 

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
export default class Sortingvisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array:[],
        };
    }

    componentDidMount(){
        this.resetarr();
    }
 
    resetarr(){
        const array = [];
        for(let i=0;i<300;i++){
            array.push(randomintfrominterval(10,660));

        }
        this.setState({array});
    }
    mergesort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value,idx) =>(
                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    

                </div> 
            ))}
            <button onClick={() => this.resetarr()}>Click to generate new array</button>
            <button onClick={() => this.mergesort()}>Merge Sort</button>
            {/* <button onClick={() => this.quicksort()}>Quick Sort</button> */}
            {/* <button onClick={() => this.heapsort()}>Heap Sort</button> */}
            {/* <button onClick={() => this.bubblesort()}>Bubble Sort</button> */}
            </div>
        );
      
    }
}

function randomintfrominterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);   
}

function arraysareequal(array1,array2){
    if(array1.length!=array2.length) return false;
    for(let i=0;i<array1.length;i++){
        if(array1[i]!=array2[i]){
            return false;
        }
    }
    return true;
}