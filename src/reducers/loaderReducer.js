export default function setLoader(state = false,action) {
    if(action.type === SET_LOADING){
        state = true;
        return state;
    }
    return state;
 }
