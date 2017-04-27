import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestUserLoggedIn } from '../../../actions/actions';
class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state = {userName:"",password:""};
    }
    handleLogin(userName,password){
        this.props.dispatch(requestUserLoggedIn({userName,password}));
        this.props.closeModal();
    }
    render(){
        return(
            <Modal open={this.props.loginModalTrigger} closeOnDocumentClick={true}>
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
                            <Button onClick={(e) => { e.preventDefault(); this.handleLogin(this.state.userName , this.state.password)}}>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                </Modal>
        );
    }    
}
export default connect()(LoginModal);