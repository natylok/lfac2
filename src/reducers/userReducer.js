import { SET_USER_DETAILS } from '../actions/userActions';

export default function userReducer(state={
    isUserLoggedIn:false,
    userName:"",
    email:"",
    fullName:"",
    id:""
},action){
    switch (action.type){
        case SET_USER_DETAILS:
            return Object.assign({},state,{
                isUserLoggedIn:true,
                userName: action.data.userName,
                email:action.data.email,
                fullName:action.data.fullName,
                id: action.data._id
            });
        default:
            return state;
    }
}

