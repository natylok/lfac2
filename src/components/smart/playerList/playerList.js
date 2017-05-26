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
            <div>
                <div>{this.props.isPlayerFoundInCurrentGame}</div>
                <ul>
                    {currentList}
                </ul>
            </div>
        )
    }
}