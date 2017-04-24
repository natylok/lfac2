import USER_LOGGED_IN from '../actions/actions';

function setUserDetails(state={
    isLoggedIn:false
},action){
    switch (action.type){
        case USER_LOGGED_IN:
            return Object.assign({},state,{
                isLoggedIn:true,
                userName:action.data.userName,
                email:action.data.email
            });
        default:
            return state;
    }
}
