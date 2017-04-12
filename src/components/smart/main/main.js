import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { HashRouter, Router, Route } from 'react-router-dom'
import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
import MenuService from '../../../services/menuService'
export default class MenuExampleInvertedSecondary extends Component {
    // state = { activeItem: 'home' }
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' }
        const logoOptions = MenuService.buildLogoOptions;
    }
    handleItemClick() {
        (e, { name }) => this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Logo options={logoOptions}/>
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