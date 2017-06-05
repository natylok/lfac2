import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestUserLoggedIn } from '../../../actions/loginActions';
import {closeModal} from '../../../actions/modalActions';
import { createGameProfile } from '../../../actions/playerActions';
import {constants} from '../../../staticData/consts';
import  GameProfileData  from '../../../staticData/gameProfileFormData/gameProfileData';
import DynamicGameProfileForm from '../../ui/form/dynamicGameProfileForm';
import {createNewProfile} from '../../../actions/playerActions';
class CreateProfileModal extends Component{
    constructor(props){
        super(props);
    }
    handleProfileCreate(data){
        data.userId = this.props.userId;
        data.gameId = this.props.currentGame.id;
        this.props.dispatch(createNewProfile(data, this.props.currentGame.state));
        this.props.dispatch(closeModal());
    }
    render(){
        if(this.props.currentGame){
            return(
                <Modal className="createProfileModal" onClose={() => { this.props.dispatch(closeModal()); }} open={this.props.modalOpen && this.props.modalType == constants.CREATE_PROFILE}>
                    <Modal.Header><h3 className="headerGameProfile">Create new profile - {this.props.currentGame && this.props.currentGame.name}</h3></Modal.Header>
                        <Modal.Content>
                        <DynamicGameProfileForm currentGame={this.props.currentGame.state} gameData={GameProfileData[this.props.currentGame.state] && GameProfileData[this.props.currentGame.state].playerProfile} onClick={(data) => {this.handleProfileCreate(data)}}  />
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