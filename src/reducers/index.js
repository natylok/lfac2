import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import setLoader from './loaderReducer'
const reduceMaster = combineReducers({
    userReducer,
    setLoader
})

export default reduceMaster