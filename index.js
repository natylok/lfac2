import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter,Router,Route } from 'react-router-dom'
import Main from './src/components/smart/main/main'
import Games from './src/components/smart/games/games'
import Clan from './src/components/smart/clans/clans'
import Profile from './src/components/smart/profile/profile'
import reduceMaster from './src/reducers/index'
import {API_KEY,DEMO_REQUEST} from './src/staticData/static'
import thunkMiddleware from 'redux-thunk'
import Logo from './src/components/ui/logo/logo.js';


let store = createStore(reduceMaster, applyMiddleware(thunkMiddleware))
class Mains extends React.Component{
    render(){
        return(
         <Provider store={store}>
            <Main/>
        </Provider>
        )
    }
}


render(<Mains/>, document.getElementById('app'))