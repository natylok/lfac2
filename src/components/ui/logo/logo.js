import React, { Component,PropTypes } from 'react'
import { Menu, Segment , Icon } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
import { hashHistory } from 'react-router'
import _ from 'lodash';
export default class Logo extends Component {
    constructor(props){
        super(props);
        const currentState = _.filter(this.props.options,(item) =>{
            return item.isActive;
        });
        this.currentState = currentState;
        this.state = {currentState:window.location.hash.replace("#/","")}
    }

    handleItemClick(item){
        hashHistory.push(item.state);
        this.setState({currentState : item.state});
    }  
    componentDidMount(){
        this.setState({ currentState: this.currentState[0].state });
    }   

    render() {
        const { activeItem } = this.state
        const logoOptions = [];
        this.props.options.forEach((item) => {
            if(item.type === 'text'){
                logoOptions.push(<Menu.Item name={item.name} active={item.state === this.state.currentState} onClick={() => { this.handleItemClick(item) } } position={item.position} key={item.name} />)    
            }
            else if(item.type === 'icon'){
                logoOptions.push(<Menu.Item name={item.name} active={false} onClick={() => {this.handleItemClick(item,'icon')}} position={item.position} key={item.name}>
                        {item.text}
                        <Icon name={item.iconName}/>
                    </Menu.Item>
                );
            }
        });
        return (
            <Segment  inverted className="main-logo">
                <Menu  inverted pointing secondary className="logo-menu">
                        {logoOptions}     
                </Menu>
            </Segment>
        )
    }
}
Logo.PropTypes = {
    location: PropTypes.object.isRequired
};