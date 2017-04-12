import React from 'react';
import { connect } from 'react-redux'
import { loadData,getData } from '../../../actions/actions'

class Games extends React.Component{
    constructor(props){
        super(props);
    }
    getA(){
        // this.props.loadData(51);
        console.log("d is " ,this.props.d);
    }
    render() {
        return (
            <div>
                <input/>
                <div>{this.props.bla}</div>
                <button onClick={this.getA.bind(this)}>Click</button>
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

Games = connect(mapStateToProps, mapDispatchToProps)(Games);
export default Games;