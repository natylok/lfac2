import UserService from '../services/userService'
import {constants} from '../staticData/consts'
const isUserLoggedIn = UserService.isUserLoggedIn();
const fixLocationHash = (item) => {
    item = item.replace('#', "");
    item = item.replace(new RegExp("/", 'g'), "");
    return item;
}
let currentLocation = fixLocationHash(window.location.hash);
console.log(currentLocation);
currentLocation = currentLocation != "" ? currentLocation : "listGames";
let userOptions = [
        {type:'text', name: 'Login', isActive:false , state:constants.LOGIN ,position:'right'},
        { type: 'text', name: 'Sign up', isActive: false , state:constants.REGISTER}
    ];
let LOGO_OPTIONS = [
    { type: 'text', name: 'Games', isActive: isEqualGames(), state: 'gameList'},
    { type: 'text', name: 'My clans', isActive: currentLocation === 'clans' ,state: 'clans'},
];
function isEqualGames(){
    if(currentLocation != 'clans'){
        return true;
    }
}
LOGO_OPTIONS = LOGO_OPTIONS.concat(userOptions);

export default LOGO_OPTIONS;
