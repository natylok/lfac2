import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'

export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
export function setPlayerByGame(data,state){
    let playerData = {};
    playerData[state] = data;
    return { type: SET_PLAYER_DETAILS, playerData};
}

export const CREATE_PLAYER_PROFILE = "CREATE_PLAYER_PROFILE";
export function createPlayerProfile(data, state) {
    let playerData = {};
    playerData[state] = data;
    return { type: SET_PLAYER_DETAILS, playerData };
}

export function createNewProfile(data,currentGame,userId){
    return (dispatch) => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ data }, 'POST', apiList.createNewPlayerProfile(currentGame,userId))
            .then((data) => {
                dispatch(setPlayerByGame(data, currentGame));
                dispatch(setLoader(false));
            },
            err => {
                console.log(err);
            });
    }
}
