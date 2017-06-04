import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestUserLoggedIn } from '../../../actions/loginActions';
import {closeModal} from '../../../actions/modalActions';
import { createGameProfile } from '../../../actions/playerActions';
import {constants} from '../../../staticData/consts';
import  GameProfileData  from '../../../staticData/gameProfileData';
import DynamicGameProfileForm from '../../ui/form/dynamicGameProfileForm';
class CreateProfileModal extends Component{
    constructor(props){
        super(props);
    }
    handleProfileCreate(){
        this.props.dispatch(createGameProfile({}));
        this.props.dispatch(closeModal());
    }
    render(){
        if(this.props.currentGame){
            return(
                <Modal onClose={() => { this.props.dispatch(closeModal()); }} open={this.props.modalOpen && this.props.modalType == constants.CREATE_PROFILE}>
                    <Modal.Header><h4>Create new profile - {this.props.currentGame && this.props.currentGame.state}</h4></Modal.Header>
                        <Modal.Content>
                        <DynamicGameProfileForm currentGame={this.props.currentGame.state} data={GameProfileData[this.props.currentGame.state]  } />
                        </Modal.Content>
                    </Modal>
            );
        }
        else return null;
    }    
}

function mapStateToProps(state){
    return {
        modalType: state.modalReducer.modalState,
        modalOpen: state.modalReducer.modalOpen,
        currentGame: state.games.currentGame,
        userId: state.userReducer.id
    };
}
export default connect(mapStateToProps)(CreateProfileModal);