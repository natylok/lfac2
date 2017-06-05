import gameProfileService from '../services/gameProfileService';
let GameProfileData = {};

GameProfileData.lol = {
    data: {
        nameInGame:'',
        rank:'',
        mainRole:'',
        isLookingForClan:true
    },
    options: [
        { inputData: 'nameInGame', type:'input' , label:'Player Name:' , placeholder: 'Select your player name' },
        { inputData: 'rank', type: 'select', options: gameProfileService.lol.getServerList(), label: 'Server:', placeholder: 'Select the server you are playing at' },
        { inputData: 'rank', type:'select', options:gameProfileService.lol.getLolRankOptions() , label: 'Rank:', placeholder: 'Select your player rank' },
        { inputData: 'mainRole', type: 'select', options: gameProfileService.lol.getLolRoles(), label: 'Main Role:', placeholder: 'Select your main role' },
        { inputData: 'isLookingForClan', type: 'select', options: [{ text: 'yes', value: true, key: 'true' }, { text: 'No', value: false, key: 'false' }] , label:'Looking for clan?'},
        { type: 'submit', text: 'Add new profile'},
    ]
};




export default GameProfileData;