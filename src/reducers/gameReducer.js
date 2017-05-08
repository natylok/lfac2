import { SET_GAME_LIST } from '../actions/gameActions';
export default function setGames(state = { games: [] }, action) {
    switch (action.type) {
        case SET_GAME_LIST:
            return Object.assign({},state,games:action.games)
        default:
            return state;
    }
}
