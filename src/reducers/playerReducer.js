import { SET_PLAYER_DETAILS } from '../actions/playerActions';

function player(state={},action){
    switch (action.type){
        case SET_PLAYER_DETAILS:
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}