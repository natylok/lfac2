import { OPEN_MODAL,CLOSE_MODAL} from '../actions/modalActions';
export default function setLoader(state = { modalOpen: false, modalState:{state:"",props:{}}} ,action) {
    switch(action.type){
        case OPEN_MODAL : 
            state = Object.assign({}, state, { modalOpen: true, modalState: action.modalState});
            return state;
        case CLOSE_MODAL:
            state = Object.assign({}, state, { modalOpen: false, modalState: {state:"",props:{}} });
            return state;
        default:
            return state;
    }
 }
