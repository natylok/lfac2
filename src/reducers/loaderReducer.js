import { SET_LOADER} from '../actions/loaderActions';
export default function setLoader(state = false ,action) {
    console.log("reducer action " ,action);
    if (action.type == SET_LOADER){
        state = action.status;
        return state;
    }
    return state;
 }
