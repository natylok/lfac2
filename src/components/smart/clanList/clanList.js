import React from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { openModal } from '../../../actions/modalActions' 
import { constants } from '../../../staticData/consts';

class ClanList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       
    }
    handleCreateProfileClick(){
        if(!this.props.userId){
            this.props.dispatch(openModal({state:constants.LOGIN}));
        }
        else{
            this.props.dispatch(openModal({state:constants.CREATE_PROFILE,props:{type:"playerProfile"}}));
        }
    }
    render(){
        console.log("clanListProps" , this.props);
        var currentList = [];
        if(this.props.clanList && Array.isArray(this.props.clanList)){
            this.props.clanList.forEach((clan) => {
                currentList.push(<li key={clan._id}>{clan.clanName}</li>);
            });
        }
        return (
            <div className="clanList">
                {this.props.playerData && Object.keys(this.props.playerData).length === 0 && <Button onClick={() => { this.handleCreateProfileClick() }} size="massive" color='blue' className="openProfileButton">Create player profile</Button>}    
                {this.props.userId && this.props.playerData && Object.keys(this.props.playerData).length > 0 && <ul>{currentList}</ul>}
            </div>
        )
    }
}
export default connect()(ClanList);