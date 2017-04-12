import React, { Component,PropTypes } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
export default class Logo extends Component {
    constructor(props){
        super(props);
        this.state = {activeItem:'home'}
    }
    componentDidMount(){
        console.dir(this.props.currentPath);
    }
    handleItemClick(){
        (e, { name }) => this.setState({ activeItem: name })
    }  
    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted className="main-logo">
                <Menu inverted pointing secondary className="menu-logo">
                    {this.props.items.forEach((item) => {
                        return (
                    <Menu.Item name={item.name} active={item.isActive} onClick={this.handleItemClick.bind(this,item.name)} />
                        )
                    })}
                </Menu>
            </Segment>
        )
    }
}
Logo.PropTypes = {
    location: PropTypes.object.isRequired
};