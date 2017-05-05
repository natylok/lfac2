import HttpService from '../services/httpService';
import {setLoader} from './loaderActions'
import {apiList} from '../staticData/consts'

export function requestUserLoggedIn(details){
    return dispatch => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ userName: details.userName, password: details.password }, 'POST', apiList.login)
        .then(userLoggedInSuccessfully,userFailedLoggedIn);
    }
}


export function userLoggedInSuccessfully(data){
    console.log(data);
}
export function userFailedLoggedIn(err) {
    console.log("failed");
}

