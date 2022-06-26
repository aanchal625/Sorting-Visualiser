import React from "react";
import './Sortingvisualiser.css';
import *as Sortingalgorithms from '../Sortingalgorithms/Sortingalgorithms.js' 

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
    mergesort(){
        const jssortedarray=this.state.array.slice().sort();
        const sortedarray=Sortingalgorithms.mergesort(this.state.array);
        console.log(arraysareequal(jssortedarray,sortedarray));
    }
    quicksort(){}
    bubblesort(){}
    heapsort(){}

    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value,idx) =>(
                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    

                </div> 
            ))}
            <button onClick={() => this.resetarr()}>Naya Array Generate kro</button>
            <button onClick={() => this.mergesort()}>Merge Sort</button>
            <button onClick={() => this.quicksort()}>Quick Sort</button>
            <button onClick={() => this.heapsort()}>Heap Sort</button>
            <button onClick={() => this.bubblesort()}>Bubble Sort</button>
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