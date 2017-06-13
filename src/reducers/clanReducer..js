import { SET_CLAN_DETAILS } from '../actions/clanActions';

export default function clans(state={},action){
    switch (action.type){
        case SET_CLAN_DETAILS:
            return Object.assign({},state,action.clanData );
        default:
            return state;
    }
}