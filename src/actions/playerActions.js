import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'

export function getPlayerDetailsForGame() {
    return HttpService.sendRequest({}, 'get', apiList.getPlayerById(userId));
}
export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
function setPlayerDetails(data){
    return {type:SET_PLAYER_DETAILS , data};
}


