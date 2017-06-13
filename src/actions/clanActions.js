import HttpService from '../services/httpService';
import { setLoader } from './loaderActions'
import { apiList } from '../staticData/consts'


export const SET_CLAN_DETAILS = "SET_CLAN_DETAILS";
export function setClanByGame(data,state){
    let clanData = {};
    clanData[state] = data;
    return { type: SET_CLAN_DETAILS, clanData};
}



export function createNewProfile(clanData,gameState){
    return (dispatch,getState) => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ data:clanData }, 'POST', apiList.createNewClanData(gameState))
            .then((data) => {
                dispatch(setClanByGame(data, gameState));
                data.state = gameState;
                dispatch(addClanToGameList(data))
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
