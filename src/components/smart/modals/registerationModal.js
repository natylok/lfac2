import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestUserRegister } from '../../../actions/registerActions';
import _ from 'lodash';
class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: "", password: "" ,email:"",fullName:""};
        this.consts = {
            LOGIN: 'login',
            REGISTER: 'register'
        };
    }
    handleRegister(userName, password, email, fullName) {
        this.props.dispatch(requestUserRegister({ userName, password,email,fullName }));
        this.props.closeModal();
    }
    render() {
        return (
            <Modal open={this.props.modalType === this.consts.REGISTER} onClose={() => {this.props.closeModal()}}>
                <Modal.Header><h4>Registeration</h4></Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>User Name</label>
                            <input placeholder="User Name" onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Full name</label>
                            <input placeholder="Full name" onChange={(e) => { this.setState({ fullName: e.target.value }) }} />
                        </Form.Field>
                        <Form.Field>
                            <Button onClick={(e) => { e.preventDefault(); this.handleRegister(this.state.userName, this.state.password, this.state.email, this.state.fullName) }}>Register</Button>
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        modalType: state.modalReducer.modalState
    };
}
export default connect(mapStateToProps)(RegisterModal);