import HttpService from '../services/httpService';
import { apiList } from '../staticData/consts'
import { setLoader } from './loaderActions'


export function setUserDetails(){
    return dispatch => {
        dispatch(setLoader(true));
        HttpService.sendRequest({},'GET',apiList.getUserDetails).then(successHandler,failureHandler);
    }
}
export const SET_USER_DETAILS = "SET_USER_DETAILS";
function successHandler(data){
    return dispatch => { 
        dispatch(setLoader(false));
        return {type:SET_USER_DETAILS,data:data};
    }
}

function failureHandler(err){
    console.log("userFailed", err);
}