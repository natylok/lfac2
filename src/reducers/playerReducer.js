import { SET_PLAYER_DETAILS } from '../actions/playerActions';

export default function player(state={},action){
    switch (action.type){
        case SET_PLAYER_DETAILS:
            return Object.assign({},state,action.playerData );
        default:
            return state;
    }
}