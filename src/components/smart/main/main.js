import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Segment } from 'semantic-ui-react'
import { HashRouter, Router, Route } from 'react-router-dom'
import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
import LOGO_OPTIONS from '../../../staticData/logoOptions'
import createHistory from 'history/createBrowserHistory'
class MainMenu extends Component {
    constructor(props) {
        super(props);
    }
    getProps(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Logo options={LOGO_OPTIONS}/>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Games} />
                        <Route path="/games" component={Games} />
                    </div>
                </HashRouter>
                <button onClick={()=>this.getProps()}>Click</button>
                {this.props.loaderStatus && <div>Loading....</div>}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        loaderStatus : state.loaderReducer.currentStatus
    };
}
export default connect(mapStateToProps)(MainMenu)