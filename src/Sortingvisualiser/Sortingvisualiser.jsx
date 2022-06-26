import React from "react";
import './Sortingvisualiser.css';

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
            array.push(randomintfrominterval(10,690));

        }
        this.setState({array});
    }

    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value,idx) =>(
                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    

                </div> 
            ))}
            <button onClick={() => this.resetarr()}>Naya Array Generate kro</button>
            </div>
        );
      
    }
}

function randomintfrominterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);   
}