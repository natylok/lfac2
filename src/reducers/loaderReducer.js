import SET_LOADING from '../actions/actions';
export default function setLoader(state = false,action) {
    if(action.type === SET_LOADING){
        state = action.status;
        return state;
    }
    return state;
 }
