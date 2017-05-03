import React, { Component } from 'react'
import { Image, Loader } from 'semantic-ui-react'
export default class LoaderComponent  extends Component{
    render(){
        return(
            <Loader active={this.props.active}>
            </Loader>
        )
    }
}