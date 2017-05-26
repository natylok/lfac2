import React from 'react';
import { Button } from 'semantic-ui-react'

export default class ClanList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       
    }
    render(){
        var currentList = [];
        if(this.props.clanList && Array.isArray(this.props.clanList)){
            this.props.clanList.forEach((clan) => {
                currentList.push(<li key={clan._id}>{clan.clanName}</li>);
            });
        }
        return (
            <div>
                {!this.props.userId && <Button color='purple'>Click here to connect and search for clan!</Button>}    
                <ul>
                    {currentList}
                </ul>
            </div>
        )
    }
}