import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { HashRouter, Router, Route } from 'react-router-dom'

import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
import LOGO_OPTIONS from '../../../staticData/logoOptions'
import createHistory from 'history/createBrowserHistory'
export default class MenuExampleInvertedSecondary extends Component {
    constructor(props) {
        super(props);
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
            </div>
        )
    }
}