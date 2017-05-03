import React, { Component } from 'react'
import LoginModal from './loginModal'
import RegisterModal from './registerationModal'
export default class ModalRoot extends Component{
    render(){
        return(
            <div>
                <LoginModal/>
                <RegisterModal/>
            </div>
        )
    }
}