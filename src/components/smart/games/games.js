import React from 'react';
import { connect } from 'react-redux'
import {setLoader} from '../../../actions/loaderActions'
import { getGames } from '../../../actions/gameActions'
import { Header, Divider, Grid ,Image} from 'semantic-ui-react'
import { hashHistory } from 'react-router'
class Games extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(getGames());
        window.s = hashHistory;
    }
    handleGameClicked(item){
        hashHistory.push(`${hashHistory.getCurrentLocation().pathname}/${item.state}`);   
    }
    render() {
        if (this.props.gameList && this.props.gameList.games){
            var gamesList = [];
            this.props.gameList.games.forEach((item) => {
                gamesList.push(<Grid.Column><Image className="game-item" onClick={() => { this.handleGameClicked(item) }} src={item.picturePath} width={180} height={250}/></Grid.Column>);
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
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
        gameList:state.gameList    
    }
}

export default connect(mapStateToProps)(Games);