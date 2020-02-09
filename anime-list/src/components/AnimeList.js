import React, {useState} from 'react';
import {connect} from 'react-redux';


const AnimeList = props =>{
    const[counter, setCounter] = useState(0);

    console.log("list length",(props.animelist.length - 1));
    
    const nextHandler = () =>{
        if(counter === props.animelist.length - 1){
            return setCounter(0);
        }
        else{
            return setCounter(counter + 1);
        }
        
    }
    const backHandler = () =>{
        if(counter < 1){
            return setCounter(props.animelist.length - 1);
        }

        else{
            return setCounter(counter - 1);
        }
        
    }

    console.log("counter",counter);

    return(
    <div>{props.animelist.map((list, index) =>{
        if(counter === index){
            return(
        
        <div className = "Movie-Box" key = {list.id}>
            <h1>{list.title}</h1>
            <div className="info">
                <p>Director: {list.director}</p>
                <p>Rotten Tomato Score: {list.rt_score}</p>
                <p>Description: {list.description}</p>
            </div>
            <button onClick ={backHandler}>Back</button>
            <button onClick ={nextHandler}>Next</button>
        </div>
        )
        }
        
    })}</div>
    )
};

const mapStateToProps = state => {
    return {
        animelist: state.animeList
    }
}

export default connect(
    mapStateToProps,
    {}
)(AnimeList);