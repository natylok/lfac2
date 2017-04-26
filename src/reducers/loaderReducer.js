import { SET_LOADER} from '../actions/actions';
export default function setLoader(state = {currentStatus:false},action) {
    if (action.type == SET_LOADER){
        state.currentStatus = action.status;
        return state;
    }
    return state;
 }
