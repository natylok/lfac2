import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { setCurrentGameDetails, setCurrentGameOption} from '../../../actions/gameActions'
import { hashHistory } from 'react-router'
import { states } from '../../../staticData/consts';
import { Button, Divider, Segment, Grid, Header,Menu} from 'semantic-ui-react'
import ClanList from '../clanList/clanList';
import PlayersList from '../playerList/playerList';
class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.menuConsts = {
            CLANS:'clans',
            PLAYERS:'players'
        }
        this.state = { currentActiveItem: this.menuConsts.CLANS, currentGame:this.props.currentGame};
    }
    componentWillMount(){
        if (!this.props.currentGame){  
            let currentGame = this.isGameAppearsInList();   
            if (currentGame){
                this.setState({currentGame});
                this.props.dispatch(setCurrentGameOption(currentGame._id, currentGame.name, currentGame.state));
                this.props.dispatch(setCurrentGameDetails(currentGame,this.props.userId));
            }
            else{ 
                this.props.history.push(`/${states.gameList}`);
            }
        }
        else{
            this.props.dispatch(setCurrentGameDetails(this.state.currentGame, this.props.userId));
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
        console.log("gamePage props", this.props);
        let propsForList = {};
        if (this.props.gamesDetails && this.props.gamesDetails[this.state.currentGame.state] && Object.keys(this.props.gamesDetails[this.state.currentGame.state]).length > 0)
        propsForList = {
            userId: this.props.userId ,
            currentGame: this.props.currentGame,
            currentGameDetails: this.props.gamesDetails[this.state.currentGame.state],
            clanList: this.props.gamesDetails[this.state.currentGame.state].clans,
            playerList: this.props.gamesDetails[this.state.currentGame.state].players,
            playerData: this.props.playerData[this.state.currentGame.state] 
        }
        return(
            <div>
                <Header size="huge" className="game-page-header" >{this.props.currentGame && this.props.currentGame.name}</Header> 
                <Menu tabular className="game-page-menu">
                    <Menu.Item name='Clans' active={this.state.currentActiveItem == this.menuConsts.CLANS} onClick={() => { this.setActiveItem(this.menuConsts.CLANS)}} />
                    <Menu.Item name='Players' active={this.state.currentActiveItem == this.menuConsts.PLAYERS} onClick={() => { this.setActiveItem(this.menuConsts.PLAYERS) }} />       
                </Menu>
                {this.state.currentActiveItem === this.menuConsts.CLANS && <ClanList {...propsForList}/>}
                {this.state.currentActiveItem === this.menuConsts.PLAYERS && <PlayersList {...propsForList} />}
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        currentGame: state.games.currentGame,
        gameList: state.games.list,
        isUserLoggedIn : state.userReducer.isUserLoggedIn,
        gamesDetails : state.games.gamesDetails,
        userId: state.userReducer.id,
        playerData:state.player
    }
}

export default connect(mapStateToProps)(GamePage);