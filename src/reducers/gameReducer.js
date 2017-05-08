import { SET_GAME_LIST } from '../actions/gameActions';
export default function gameList(state = { games: [] }, action) {
    switch (action.type) {
        case SET_GAME_LIST:
            return Object.assign({},state,{games:[].concat(action.games)})
        default:
            return state;
    }
}
