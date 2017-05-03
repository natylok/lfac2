import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import loaderReducer from './loaderReducer'
import modalReducer from './modalReducer'
const reduceMaster = combineReducers({
    userReducer,
    loaderReducer,
    modalReducer
})

export default reduceMaster