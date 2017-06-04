import React, { Component } from 'react'
import LoginModal from './loginModal'
import RegisterModal from './registerationModal'
import CreateProfileModal from './createProfileModal'
export default class ModalRoot extends Component{
    render(){
        return(
            <div>
                <LoginModal/>
                <RegisterModal/>
                <CreateProfileModal/>   
            </div>
        )
    }
}