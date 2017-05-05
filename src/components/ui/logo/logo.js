import React, { Component,PropTypes } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
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
        this.props.options.forEach((item) => {
                logoOptions.push(<Menu.Item name={item.name} active={item.state === this.state.currentState} onClick={() => { this.handleItemClick(item) } } position={item.position} key={item.name} />)    
        });
        return (
            <div>
                <Segment  inverted className="main-logo">
                   <Menu  inverted pointing secondary className="logo-menu">
                            {logoOptions}     
                   </Menu>
                </Segment>
            </div>
        )
    }
}


export default connect()(Logo);