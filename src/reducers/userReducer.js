import { SET_USER_DETAILS } from '../actions/userActions';

export function userReducer(state={
    isUserLoggedIn:false,
    userName:"",
    email:"",
    fullName:""
},action){
    switch (action.type){
        case SET_USER_DETAILS:
            return Object.assign({},state,{
                isUserLoggedIn:action.data.isUserLoggedIn,
                userName: action.data.userName,
                email:action.data.email,
                fullName:action.data.fullName
            });
        default:
            return state;
    }
}

