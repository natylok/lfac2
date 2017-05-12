import React from 'react';
import { connect } from 'react-redux'
import {setLoader} from '../../../actions/loaderActions'
import { getGames, setCurrentGameOption } from '../../../actions/gameActions'
import { Header, Divider, Grid ,Image} from 'semantic-ui-react'
import { hashHistory } from 'react-router'
import { states } from '../../../staticData/consts';
class GameList extends React.Component{
    constructor(props){
        super(props);
    }
    handleGameClicked(item){
        this.props.dispatch(setCurrentGameOption(item.name, item._id));
        hashHistory.push(`${states.games}/${item.state}`);   
    }
    render() {
        if (this.props.gameList){
            var gamesList = [];
            this.props.gameList.forEach((item) => {
                gamesList.push(<Grid.Column key={item._id}><Image className="game-item" onClick={() => { this.handleGameClicked(item) }} src={item.picturePath} width={180} height={250}/></Grid.Column>);
            })
        }
        return (
            <div className="game-wrapper">
                <Header size='large'>Game List</Header> 
                <Divider />
                <Header size='small' color='grey'> Open the following to see clans and players:</Header> 
                <Grid columns={5}>
                    {gamesList}
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
        gameList:state.games.list     
    }
}

export default connect(mapStateToProps)(GameList);