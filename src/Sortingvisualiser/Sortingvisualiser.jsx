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
        for(let i=0;i<100;i++){
            array.push(randomintfrominterval(10,1000));

        }
        this.setState({array});
    }

    render(){
        const {array} = this.state;

        return (
            <>
            {array.map((value,idx) =>(
                <div className="array-bar" key={idx}>
                    {value}

                </div>
            ))}
            </>
        );
      
    }
}

function randomintfrominterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);   
}