import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import loaderReducer from './loaderReducer'
const reduceMaster = combineReducers({
    userReducer,
    loaderReducer
})

export default reduceMaster