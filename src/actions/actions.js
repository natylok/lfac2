import HttpService from '../services/httpService';
import {apiList} from '../staticData/consts'

export const SET_LOADER = "SET_LOADER";
export function setLoader(status) {
    return { type: SET_LOADER ,status}
}


export const REQUEST_USER_LOGGED_IN = "REQUEST_USER_LOGGED_IN";
export function requestUserLoggedIn(details){
    return dispatch => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ userName: details.userName, password: details.password }, 'POST', apiList.login)
        .then(userLoggedInSuccessfully,userFailedLoggedIn);
    }
}
export function userLoggedInSuccessfully(data){
    return dispatch =>{
        dispatch(setLoader(false));
        dispatch(setUserDetails(data));
    }
}
export function userFailedLoggedIn(err) {
    console.log("aa");
    return dispatch => {
        dispatch(setLoader(false));
        console.log(err);
    }
}

export const SET_USER_DETAILS = "SET_USER_DETAILS";
export function setUserDetails(data){
    return {type:SET_USER_DETAILS, data};
}

export const FAILED_USER_LOGGED_IN = 'FAILED_USER_LOGGED_IN'; 
