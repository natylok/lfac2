import { OPEN_MODAL,CLOSE_MODAL} from '../actions/modalActions';
export default function setLoader(state = { modelOpen: false, modelState:""} ,action) {
    switch(action.type){
        case OPEN_MODAL : 
            state = Object.assign({}, state, { modelOpen: true, modelState: action.modelState});
            return state;
        case CLOSE_MODAL:
            state = Object.assign({}, state, { modelOpen: false, modelState: "" });
            return state;
        default:
            return state;
    }
 }
