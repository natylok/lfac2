import { SET_LOADER} from '../actions/actions';
export default function setLoader(state = false ,action) {
    if (action.type == SET_LOADER){
        state = action.status;
        return state;
    }
    return state;
 }
