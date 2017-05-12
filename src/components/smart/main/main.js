import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Segment, Divider } from 'semantic-ui-react'
import { HashRouter, Router, Route ,IndexRoute} from 'react-router-dom'
import GameList from '../games/gameList'
import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
import Loader from '../../ui/loader/loader'
import { checkUser} from '../../../actions/userActions'
import { getGames } from '../../../actions/gameActions'
import LOGO_OPTIONS from '../../../staticData/logoOptions'
import createHistory from 'history/createBrowserHistory'
import ModalRoot from '../modals/modalRoot'
import GamePage from '../games/gamePage'
class MainMenu extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(checkUser());
        this.props.dispatch(getGames());
    }
    isDataLoaded(){
        return this.props.gameList.length > 0
    }
    render() {
        if(this.isDataLoaded()){
            return (
                <div>
                    <Logo options={LOGO_OPTIONS} userData={this.props.userData}/>
                    <ModalRoot/>
                    <HashRouter>
                        <div className="main-wrapper">
                            <Route exact path="/" component={GameList} />
                            <Route exact path="/gameList" component={GameList} />
                            <Route path="/games" component={Games} />
                            <Route path="/games/:gameId" component={GamePage} />
                        </div>
                    </HashRouter>
                    <Loader active={this.props.loaderStatus} />
                </div>
            )
        }
        else{
            return <Loader active={true} />
        }
    }
}
function mapStateToProps(state){
    return {
        loaderStatus: state.loaderReducer,
        userData:state.userReducer,
        gameList : state.games.list
    };
}
export default connect(mapStateToProps)(MainMenu)