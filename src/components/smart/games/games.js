import React from 'react';
import { connect } from 'react-redux'
import {setLoader} from '../../../actions/loaderActions'
import { getGames } from '../../../actions/gameActions'
class Games extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
}
function mapDispatchToProps(dispatch){
    return { 
    }
}
export default connect()(Games);