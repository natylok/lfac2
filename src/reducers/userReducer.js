import {REQUEST_USER_LOGGED_IN,SET_USER_DETAILS} from '../actions/actions';

function setUserDetails(state={
    isLoggedIn:false
},action){
    switch (action.type){
        case REQUEST_USER_LOGGED_IN:
            return Object.assign({},state,{
                isUserLoggedIn:true,
                userName:action.data.userName,
                email:action.data.email,
                userId: action.data.userId
            });
        case SET_USER_DETAILS:
            return Object.assign({},state,{
                isUserLoggedIn:true,
                aaa:'aaa'
            });
        default:
            return state;
    }
}
