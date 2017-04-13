import React, { Component,PropTypes } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
export default class Logo extends Component {
    constructor(props){
        super(props);
        this.state = {currentState:window.location.hash.replace("#/","")}
    }
    handleItemClick(item){
       console.log(item);
    }  
    render() {
        const { activeItem } = this.state
        const logoOptions = [];
        this.props.options.forEach((item) => {
            logoOptions.push(<Menu.Item name={item.name} active={item.isActive} onClick={() => {this.handleItemClick(item)}} key={item.name} />)
        });
        return (
            <Segment inverted className="main-logo">
                <Menu inverted pointing secondary className="logo-menu">
                    {logoOptions}     
                </Menu>
            </Segment>
        )
    }
}
Logo.PropTypes = {
    location: PropTypes.object.isRequired
};