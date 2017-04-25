export const SET_LOADER = "SET_LOADER";
export function setLoader(status) {
    return { type: SET_LOADER ,action:{status}}
}

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export function userLoggedIn(data){
    return {type:USER_LOGGED_IN , action : {data}};
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

}
export function userFailedLoggedIn(err){

}