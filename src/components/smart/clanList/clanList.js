import React from 'react';

export default class ClanList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       
    }
    render(){
        var currentList = [];
        console.log(this.props);
        if(this.props.clanList && Array.isArray(this.props.clanList)){
            this.props.clanList.forEach((clan) => {
                currentList.push(<li key={clan._id}>{clan.clanName}</li>);
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