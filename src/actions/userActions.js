import HttpService from '../services/httpService';
import { apiList } from '../staticData/consts'
import { setLoader } from './loaderActions'


export function checkUser(){
    return dispatch => {
        dispatch(setLoader(true));
        HttpService.sendRequest({},'GET',apiList.getUserDetails).then(data => {
            dispatch(setLoader(false));
            dispatch(setUserDetails(data));

        },err => {
            dispatch(setLoader(false));
        })
    }
}
export const SET_USER_DETAILS = "SET_USER_DETAILS";
function setUserDetails(data){
        return {type:SET_USER_DETAILS,data:data};
}