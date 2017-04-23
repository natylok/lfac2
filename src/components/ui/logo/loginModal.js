import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

export default class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state = {userName:"",password:""};
    }
    handleClick(){
        this.props.loginModalTrigger = false;
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
                            <Button onClick={(e) => { e.preventDefault(); this.props.handleLogin(this.state.userName , this.state.password)}}>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                </Modal>
        );
    }
    
}