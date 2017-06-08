import gameProfileService from '../../../services/gameProfileServices/gameProfileService';

let playerProfileData = {
    data: {
        playerName: '',
        rank: '',
        mainRole: '',
        currentServer:'',
        lookingForClan: true
    },
    options: [
        { inputData: 'playerName', type: 'input', label: 'Player Name:', placeholder: 'Select your player name' },
        { inputData: 'currentServer', type: 'select', options: gameProfileService.lol.getServerList(), label: 'Server:', placeholder: 'Select the server you are playing at' },
        { inputData: 'rank', type: 'select', hasImages:true, options: gameProfileService.lol.getLolRankOptions(), label: 'Rank:', placeholder: 'Select your player rank' },
        { inputData: 'mainRole', type: 'select', hasImages:true , options: gameProfileService.lol.getLolRoles(), label: 'Main Role:', placeholder: 'Select your main role' },
        { inputData: 'lookingForClan', type: 'select', options: [{ text: 'yes', value: true, key: 'true' }, { text: 'No', value: false, key: 'false' }], label: 'Looking for clan?' },
        { type: 'submit', text: 'Add new profile' },
    ]
};
export default playerProfileData;