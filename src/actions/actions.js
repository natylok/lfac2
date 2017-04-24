const SET_LOADER = "SET_LOADER";
export function setLoader() {
    return { type: SET_LOADER }
}

const USER_LOGGED_IN = "USER_LOGGED_IN";
export function userLoggedIn(data){
    return {type:USER_LOGGED_IN , action : {data}};
}