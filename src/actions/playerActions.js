import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'

export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
export function setPlayerByGame(data,state){
    let playerData = {};
    playerData[state] = data;
    return { type: SET_PLAYER_DETAILS, playerData};
}



export function createNewProfile(data,gameState){
    return (dispatch,getState) => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ data }, 'POST', apiList.createNewPlayerProfile(gameState))
            .then((data) => {
                dispatch(setPlayerByGame(data, gameState));
                dispatch(setLoader(false));
            },
            err => {
                console.log(err);
            });
    }
}
