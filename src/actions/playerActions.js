import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'

export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
export function setPlayerByGame(data,state){
    let playerData = {};
    playerData[state] = data;
    return { type: SET_PLAYER_DETAILS, playerData};
}

