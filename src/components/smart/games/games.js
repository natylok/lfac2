import React from 'react';
import { connect } from 'react-redux'
import { loadData,getData } from '../../../actions/loginActions'

export default class Games extends React.Component{
    constructor(props){
        super(props);
    }
    getA(){
        // this.props.loadData(51);
       
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return { bla: state.logoReducer.data && state.logoReducer.data.text , d:ownProps}
}
function mapDispatchToProps(dispatch){
    return { 
            loadData: (id) => {
                dispatch(getData(id))
            }
        }
}

// Games = connect(mapStateToProps, mapDispatchToProps)(Games);
// export default Games;