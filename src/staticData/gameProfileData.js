import gameProfileService from '../services/gameProfileService';
let GameProfileData = {};

GameProfileData.lol = {
    data: {
        nameInGame:'',
        rank:'',
        mainRole:''
    },
    options: [
        { inputData: 'nameInGame', type:'input' , label:'Player Name:' , placeholder: 'Select your player name' },
        { inputData: 'rank', type:'select', options:gameProfileService.getLolRankOptions() , label: 'Rank:', placeholder: 'Select your player rank' },
        { inputData: 'mainRole', type: 'select', options: gameProfileService.getLolRoles(), label: 'Main Role:', placeholder: 'Select your main role' },
        { type: 'submit', text: 'Add new profile'},
    ]
};


export default GameProfileData;