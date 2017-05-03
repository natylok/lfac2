import { OPEN_MODAL,CLOSE_MODAL} from '../actions/modalActions';
export default function setLoader(state = { modalOpen: false, modalState:""} ,action) {
    console.log(action,state);
    switch(action.type){
        case OPEN_MODAL : 
            state = Object.assign({}, state, { modalOpen: true, modalState: action.modalState});
            return state;
        case CLOSE_MODAL:
            state = Object.assign({}, state, { modalOpen: false, modalState: "" });
            return state;
        default:
            return state;
    }
 }
