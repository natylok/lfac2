import { combineReducers } from 'redux'
import userReducer from'./userReducer'
import setLoader from './loaderReducer'
setLoader
const reduceMaster = combineReducers({
    logoReducer,
    setLoader
})

export default reduceMaster