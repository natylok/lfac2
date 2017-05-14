import HttpService from '../services/httpService';
import { setLoader } from './loaderActions';
import { apiList } from '../staticData/consts';
export function getGames(){
    return (dispatch,getState) => {
        if(!isGamesFetched(getState())){
            dispatch(setLoader(true));
            HttpService.sendRequest({}, 'GET', apiList.getGames).then((data) => {
                dispatch(setGameListData(data));
                dispatch(setLoader(false));
            },
                err => {
                    console.log(err);
                });
        }
    }
}
export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';
export function setCurrentGameOption(id,name){
    console.log("yes");
    return {type:SET_CURRENT_GAME , game:{id,name}}
}
export const SET_GAME_LIST = "SET_GAME_LIST";
export function setGameListData(data){
    return {type:SET_GAME_LIST,games:data};
}

function isGamesFetched(state){
    return state.gameList && state.gameList.games && state.gameList.games.length > 0 ;
}