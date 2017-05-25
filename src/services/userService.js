import _ from 'lodash';
export default class UserService{
    constructor(){

    }
    static isUserLoggedIn(){
        return this.isLoggedIn;
    }
    static getUserFullName(){
        return this.fullName;
    }
    static getPlayerDataInGame(currentGame,playersInGame,userId){
        let player = _.find(playersInGame,(player) => {
            return player.userId === userId; 
        });
        let tempObj = {};
        tempObj[currentGame.state] = player ? player : { isFoundInGame: false }
        return tempObj;
    }
}