import HttpService from '../services/httpService';
import {apiList} from '../staticData/consts'
import { setLoader } from './loaderActions'
export function requestUserRegister(details) {
    return dispatch => {
        dispatch(setLoader(true));
        HttpService.sendRequest({ userName: details.userName, password: details.password ,email:details.email,fullName:details.fullName }, 'POST', apiList.register)
            .then(userRegisterSuccessfully, userFailedRegister);
    }
}
export function userRegisterSuccessfully(data){
    console.log(data);
}
export function userFailedRegister(err){
    console.log(err);
}