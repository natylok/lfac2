import React, { Component,PropTypes } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
import { hashHistory } from 'react-router'
//import { RegistertionModal } from '../registerationModal' 
import  LoginModal  from './loginModal' 
import _ from 'lodash';
import $ from 'jquery';
export default class Logo extends Component {    
    constructor(props){
        super(props);
        const currentState = _.filter(this.props.options,(item) =>{
            return item.isActive;
        });
        this.currentState = currentState;
        this.consts = {
            LOGIN: "login",
            REGISTER:"register"
        };
        this.state = {currentState:window.location.hash.replace("#/",""),loginModalTrigger:false,registerationModalTrigger:false}
    }

    handleItemClick(item){
        if (item.state === this.consts.LOGIN){
            this.setState({loginModalTrigger:true})
        }
        else if (item.state === this.consts.REGISTER){
            this.setState({ registerationModalTrigger: true })
        }
        else{
            this.setState({ currentState: item.state });
        }
        
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
                        <Icon name={item.iconName}/>
                        {item.text}
                    </Menu.Item>
                );
            }
        });
        return (
            <div>
                <Segment  inverted className="main-logo">
                   <Menu  inverted pointing secondary className="logo-menu">
                            {logoOptions}     
                   </Menu>
                     {/*<RegistertionModal registerationModalTrigger={this.state.registerationModalTrigger} />*/}
                </Segment>
                <LoginModal loginModalTrigger={this.state.loginModalTrigger} closeModal={() => {this.setState({loginModalTrigger:false})}} />
            </div>
        )
    }
}
