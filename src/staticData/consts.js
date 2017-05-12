const baseUrl = "http://localhost:8877";
export const apiList = {
    login:`${baseUrl}/login`,
    register: `${baseUrl}/register`,
    getUserDetails: `${baseUrl}/1/user`,
    getGames: `${baseUrl}/games/list`
};
export const constants = {
    LOGIN:'login',
    REGISTER:'register'
}
export const states = {
    gameList : 'gameList',
    games: 'games',
    listOfGames : ['wow','lol','runescape']
};