export default class UserService{
    constructor(){

    }
    static isUserLoggedIn(){
        return this.isLoggedIn;
    }
    static getUserFullName(){
        return this.fullName;
    }
}