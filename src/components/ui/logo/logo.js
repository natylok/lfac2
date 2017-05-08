import React, { Component,PropTypes } from 'react'
import { Menu, Segment, Icon,Image,Input } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
import { hashHistory } from 'react-router'
import {openModal} from '../../../actions/modalActions'
import { connect } from 'react-redux'
import {constants} from '../../../staticData/consts'
import _ from 'lodash';

class Logo extends Component {    
    constructor(props){
        super(props);
        const currentState = _.filter(this.props.options,(item) =>{
            return item.isActive;
        });
        this.currentState = currentState;
        this.state = {currentState:window.location.hash.replace("#/","")}
    }
    handleItemClick(item){
        if (item.state === constants.LOGIN){
            this.props.dispatch(openModal(constants.LOGIN));
        }
        else if (item.state === constants.REGISTER){
            this.props.dispatch(openModal(constants.REGISTER))
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
        logoOptions.push(<Menu.Item name="logo" key="main-logo"><Image src="/assests/logo/logo.png" width={50} height={20}/></Menu.Item>)
        let isUserLoggedIn = this.props.userData && this.props.userData.isUserLoggedIn;
        this.props.options.forEach((item) => {
            if (isUserLoggedIn && (item.state === constants.LOGIN || item.state === constants.REGISTER )){
                return;
            }
                logoOptions.push(<Menu.Item name={item.name} active={item.state === this.state.currentState} onClick={() => { this.handleItemClick(item) } } position={item.position} key={item.name} />)    
        });
        if (isUserLoggedIn){
            let userData = this.props.userData;
            logoOptions.push(<Menu.Item position="right" className="search-games" key="search-games">
                <Input icon='search' placeholder='Search games...' />
            </Menu.Item>);
            logoOptions.push(<Menu.Item name={userData.fullName} active={false} onClick={() => { this.handleItemClick(item) }} position="right" key={userData.fullName} ><Icon name='user'/> {userData.fullName} </Menu.Item>)
            logoOptions.push(<Menu.Item name='logout' active={false} onClick={()=> {this.logout();}} key="logout"/>)
        }
        return (
            <div>
                <Menu inverted className="main-logo">
                     {logoOptions}     
                </Menu>
            </div>
        )
    }
}


export default connect()(Logo);