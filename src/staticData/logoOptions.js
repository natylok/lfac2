import UserService from '../services/userService'
import {constants} from '../staticData/consts'
const isUserLoggedIn = UserService.isUserLoggedIn();
const fixLocationHash = (item) => {
    item = item.replace('#/', "");
    return item;
}
let currentLocation = fixLocationHash(window.location.hash);
currentLocation = currentLocation != "" ? currentLocation : "games";
let userOptions = [];
if (isUserLoggedIn){
    const userFullName = UserService.getUserFullName();
    userOptions = [
        { type: 'icon', text: userFullName, iconName:'user', position:'right'}
    ];
}
else{
    userOptions = [
        {type:'text', name: 'Login', isActive:false , state:constants.LOGIN ,position:'right'},
        { type: 'text', name: 'Sign up', isActive: false , state:constants.REGISTER}
    ];
}
let LOGO_OPTIONS = [
    { type: 'text', name: 'Games', isActive: currentLocation === 'games', state: 'games'},
    { type: 'text', name: 'My clans', isActive: currentLocation === 'clans' ,state: 'clans'},
];
LOGO_OPTIONS = LOGO_OPTIONS.concat(userOptions);

export default LOGO_OPTIONS;
