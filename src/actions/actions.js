export const SET_LOADER = "SET_LOADER";
export function setLoader(status) {
    return { type: SET_LOADER ,status}
}

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export function userLoggedIn(data){
    return {type:USER_LOGGED_IN , data};
}

export const REQUEST_USER_LOGGED_IN = "REQUEST_USER_LOGGED_IN";
export function requestUserLoggedIn(details){
    return dispatch => {
        dispatch(setLoader(true));
        httpService.loginRequest({userName:details.userName, password:details.password}, 'POST',consts.urls.login)
        .then(userLoggedInSuccessfully,userFailedLoggedIn);
    }
}
export function userLoggedInSuccessfully(data){
    return dispatch =>{
        dispatch(setLoader(false));
        dispatch(setUserDetails(data));
    }
}
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export function setUserDetails(data){
    return {type:SET_USER_DETAILS, data};
}

export const FAILED_USER_LOGGED_IN = 'FAILED_USER_LOGGED_IN'; 
export function userFailedLoggedIn(err){
    return { type: FAILED_USER_LOGGED_IN , action:err}
}