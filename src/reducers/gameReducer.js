import { SET_GAME_LIST, SET_CURRENT_GAME, SET_GAME_DETAILS} from '../actions/gameActions';
import { ADD_PLAYER_TO_GAME } from '../actions/playerActions';
function setGameList(state = [], action) {
    switch (action.type) {
        case SET_GAME_LIST:
            return [].concat(action.games);
        default:
            return state;
    }
}
export default function games(state = {
        list : [],
        currentGame:null,
        gamesDetails:{}
    },action){
        switch(action.type){
            case SET_GAME_LIST:
                return Object.assign({},state,{list:setGameList(state.list,action)});
            case SET_CURRENT_GAME:
                return Object.assign({},state,{currentGame:{id:action.game.id, name:action.game.name, state:action.game.state}}); 
            case SET_GAME_DETAILS:
                let gamesDetails = {};
                gamesDetails[action.data.state] = action.data;
                return Object.assign({}, state, { gamesDetails });
            case ADD_PLAYER_TO_GAME:
                let updatedGameDetails  = addToGameList(state,"players",action.data);
                return Object.assign({}, state, updatedGameDetails);
            default:
                return state;
        }
}
    function addToGameList(state,listType,actionData){
        let gameState = actionData.state;
        let copyGameDetails = Object.assign({},state);
        delete actionData.state; 
        if (copyGameDetails.gamesDetails[gameState]){
        copyGameDetails.gamesDetails[gameState][listType].push(actionData);
        copyGameDetails.gamesDetails[gameState][listType] = [].concat(copyGameDetails.gamesDetails[gameState][listType]);
        }   
        return copyGameDetails.gamesDetails;
    }