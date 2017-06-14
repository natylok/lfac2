import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestUserLoggedIn } from '../../../actions/loginActions';
import {closeModal} from '../../../actions/modalActions';
import {constants} from '../../../staticData/consts';
class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state = {userName:"",password:""};
    }
    handleLogin(userName,password){
        this.props.dispatch(requestUserLoggedIn({userName,password}));
        this.props.dispatch(closeModal());
    }
    render(){
        return(
            <Modal onClose={() => { this.props.dispatch(closeModal()); }} open={this.props.modalOpen && this.props.modalType == constants.LOGIN}>
                    <Modal.Header><h4>Log in</h4></Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>User Name</label>
                                <input placeholder="User Name" onChange={(e) => { this.setState({ userName: e.target.value }) }}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder="Password" onChange={(e) => {this.setState({password:e.target.value})}}/>
                            </Form.Field>
                            <Form.Field>
                            <Button onClick={(e) => { e.preventDefault(); this.handleLogin(this.state.userName , this.state.password)}}>Login</Button>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                </Modal>
        );
    }    
}

function mapStateToProps(state){
    return {
        modalType: state.modalReducer.modalState.state,
        modalOpen: state.modalReducer.modalOpen
    };
}
export default connect(mapStateToProps)(LoginModal);