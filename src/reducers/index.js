import { combineReducers } from 'redux'
import logoReducer from'./logo/logoReducer'
const reduceMaster = combineReducers({
    logoReducer,
})

export default reduceMaster