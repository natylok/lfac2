import gameProfileService from '../../../services/gameProfileServices/gameProfileService';

let clanProfileData = {
    data: {
        clanName: '',
        rank: '',
        currentServer:'',
        lookingForPlayers: true
    },
    options: [
        { inputData: 'clanName', type: 'input', label: 'Clan Name:', placeholder: 'Select your clan name' },
        { inputData: 'currentServer', type: 'select', options: gameProfileService.lol.getServerList(), label: 'Server:', placeholder: 'Select the server your clan is found at' },
        { inputData: 'rank', type: 'select', hasImages:true, options: gameProfileService.lol.getLolRankOptions(), label: 'Rank:', placeholder: 'Select your clan rank' },
        { inputData: 'lookingForPlayers', type: 'select', options: [{ text: 'yes', value: 'true', key: 'true' }, { text: 'No', value: 'false', key: 'false' }], label: 'Looking for clan?' ,placeholder:"Looking for a players?" },
        { type: 'submit', text: 'Add new clan' },
    ]
};
export default clanProfileData;