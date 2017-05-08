import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Segment, Divider } from 'semantic-ui-react'
import { HashRouter, Router, Route } from 'react-router-dom'
import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
import Loader from '../../ui/loader/loader'
import { checkUser} from '../../../actions/userActions'
import LOGO_OPTIONS from '../../../staticData/logoOptions'
import createHistory from 'history/createBrowserHistory'
import ModalRoot from '../modals/modalRoot'
class MainMenu extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(checkUser());
    }
    render() {
        return (
            <div>
                <Logo options={LOGO_OPTIONS} userData={this.props.userData}/>
                <ModalRoot/>
                <Divider/>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Games} />
                        <Route path="/games" component={Games} />
                    </div>
                </HashRouter>
                <Loader active={this.props.loaderStatus} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        loaderStatus: state.loaderReducer,
        userData:state.userReducer
    };
}
export default connect(mapStateToProps)(MainMenu)