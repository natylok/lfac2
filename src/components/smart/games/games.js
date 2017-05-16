import React from 'react';
import { connect } from 'react-redux'
import { setLoader } from '../../../actions/loaderActions'
import { getGames} from '../../../actions/gameActions'
import { Header, Divider, Grid, Image } from 'semantic-ui-react'
import { hashHistory } from 'react-router'
import {states} from '../../../staticData/consts';
import _ from 'lodash';
class Games extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if(this.urlNotContainGame()){
            hashHistory.push(states.gameList);
        }
    }
    urlNotContainGame(){
        return !this.props.match.params || this.props.match.isExact;
    }
    render() {
        return (null);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gameList: state.games.list,
        currentGame : state.games.currentGame
    }
}

export default connect(mapStateToProps)(Games);