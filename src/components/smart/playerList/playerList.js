import React from 'react';

export default class PlayersList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    render() {
        var currentList = [];
        if (this.props.playerList && Array.isArray(this.props.playerList)) {
            this.props.playerList.forEach((player) => {
                if (player.lookingForClan){
                    currentList.push(<li key={player._id}>{player.playerName}</li>);
                }
            });
        }
        return (
            <div className="playerList">
                {this.props.clanData && Object.keys(this.props.clanData).length === 0 && <Button onClick={() => { this.handleCreateClanProfileClick() }} size="massive" color='blue' className="openProfileButton">Create clan profile</Button>}    
                {this.props.userId && this.props.clanData && Object.keys(this.props.clanData).length > 0 && <ul>{currentList}</ul>}
            </div>
        )
    }
}