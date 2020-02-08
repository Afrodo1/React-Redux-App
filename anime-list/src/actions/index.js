import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const UPDATE_lIST = "UPDATE_LIST";

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});
    axios
        .get("http://ghibliapi.herokuapp.com/films")
        .then(res => {
            console.log(res)
            dispatch({type: UPDATE_lIST, payload: res.data});
        })
        .catch(err => console.log('error fetching data from api. err: ', err));
};