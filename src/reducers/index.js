import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import loaderReducer from './loaderReducer'
import modalReducer from './modalReducer'
import games from './gameReducer'
const reduceMaster = combineReducers({
    userReducer,
    loaderReducer,
    modalReducer,
    games
})

export default reduceMaster;