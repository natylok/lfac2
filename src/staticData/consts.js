const baseUrl = "http://localhost:8877";
export const apiList = {
    login:`${baseUrl}/login`,
    register: `${baseUrl}/register`,
    getUserDetails: `${baseUrl}/1/user`,
    getGames: `${baseUrl}/games/list`,
    getPlayersAndClansForGame: (gameState) => { return `${baseUrl}/games/gameDetails/${gameState}`},
    createNewPlayerProfile: (gameState) => {return `${baseUrl}/1/players/${gameState}/createProfile`}
};
export const constants = {
    LOGIN:'login',
    REGISTER:'register',
    CREATE_PROFILE: 'createProfile'
}
export const states = {
    gameList : 'gameList',
    games: 'games',
    listOfGamesStates : ['wow','lol','runescape']
};