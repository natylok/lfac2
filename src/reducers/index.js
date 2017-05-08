import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import loaderReducer from './loaderReducer'
import modalReducer from './modalReducer'
import gameList from './gameReducer'
const reduceMaster = combineReducers({
    userReducer,
    loaderReducer,
    modalReducer,
    gameList
})

export default reduceMaster