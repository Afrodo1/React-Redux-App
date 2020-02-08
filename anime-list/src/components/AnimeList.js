import React from 'react';
import {connect} from 'react-redux';

const AnimeList = props =>{
    return(
    <div>{props.animelist.map(list =>{
        return(
        <div>{list.title}</div>
        )
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