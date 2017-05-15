import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { setCurrentGameOption } from '../../../actions/gameActions'
import { hashHistory } from 'react-router'
import { states } from '../../../staticData/consts';
import { Button, Divider, Segment, Grid, Header,Menu} from 'semantic-ui-react'
class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentActiveItem:'players'}
    }
    componentWillMount(){
        if (!this.props.currentGame){  
            let currentGame = this.isGameAppearsInList();     
            if (currentGame){
                this.props.dispatch(setCurrentGameOption(currentGame._id,currentGame.name));
            }
            else{ 
                this.props.history.push(`/${states.gameList}`);
            }
        }
    }
    
    isGameAppearsInList(){
        let gameInList = _.find(this.props.gameList,(item) => {
            return item.state === this.props.match.params || item.state === this.props.match.params.gameId;
        })
        return gameInList;
    }

    setActiveItem(item){
        this.setState({ currentActiveItem : item});
    }
    render(){
        return(
            <div>
                <Header size="huge" className="game-page-header" >{this.props.currentGame && this.props.currentGame.name}</Header> 
                <Menu tabular className="game-page-menu">
                    <Menu.Item name='Players' active={this.state.currentActiveItem == 'players'} onClick={() => { this.setActiveItem('players') }} />
                    <Menu.Item name='Clans' active={this.state.currentActiveItem == 'clans'} onClick={() => {this.setActiveItem('clans')}} />
                </Menu>
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        currentGame: state.games.currentGame,
        gameList: state.games.list,
        isUserLoggedIn : state.userReducer.isUserLoggedIn
    }
}

export default connect(mapStateToProps)(GamePage);