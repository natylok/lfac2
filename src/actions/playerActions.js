import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'

export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
function setPlayerByGame(currentGame,data){
    data.currentGame = currentGame;
    return {type:SET_PLAYER_DETAILS , data};
}


