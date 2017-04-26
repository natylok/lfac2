import REQUEST_USER_LOGGED_IN from '../actions/actions';

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
        default:
            return state;
    }
}
