import {GET_DATA, UPDATE_lIST} from '../actions/index';
export const intialState = {
    animeList: [],
    isFetchingData: true,
    
};

// export const getData = () => {
//     return {

//     }
// };


export const animeReducer = (state = intialState, action)=>{
    switch(action.type) {
        case GET_DATA :
            return{
                ...state,
                isFetchingData : false
            };
        case UPDATE_lIST:
            return{
                ...state,
                animeList: action.payload,
                isFetchingData: true
            }
        default:
            return state;
  
    }
}