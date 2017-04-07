import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { HashRouter, Router, Route } from 'react-router-dom'
import Games from '../games/games'
import Clans from '../games/games'
import Logo from '../../ui/logo/logo'
export default class MenuExampleInvertedSecondary extends Component {
    // state = { activeItem: 'home' }
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' }
    }
    handleItemClick() {
        (e, { name }) => this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Logo currentPath={HashRouter}/>
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