import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'


export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
export function setPlayerByGame(data,state){
    let playerData = {};
    playerData[state] = data;
    return { type: SET_PLAYER_DETAILS, playerData};
}



export function createNewProfile(playerData,gameState){
    return (dispatch,getState) => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ data:playerData }, 'POST', apiList.createNewPlayerProfile(gameState))
            .then((data) => {
                dispatch(setPlayerByGame(data, gameState));
                data.state = gameState;
                dispatch(addPlayerToGameList(data))
                dispatch(setLoader(false));
            },
            err => {
                console.log(err);
            });
    }
}

export const ADD_PLAYER_TO_GAME = "ADD_PLAYER_TO_GAME";
function addPlayerToGameList(data){
    return {
        type: ADD_PLAYER_TO_GAME,
        data
    };
}
