import React from 'react';
import { connect } from 'react-redux'
import {setLoader} from '../../../actions/loaderActions'
import { getGames } from '../../../actions/gameActions'
class Games extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(getGames());
    }
    render() {
        if (this.props.gameList && this.props.gameList.games){
            var d = [];
            this.props.gameList.games.forEach((item) => {
                 d.push(<li>{item.name}</li>);
            })
        }
        return (
            <div>
                <ul>
                    {d}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
        gameList:state.gameList    
    }
}

export default connect(mapStateToProps)(Games);