const baseUrl = "http://localhost:8877";
export const apiList = {
    login:`${baseUrl}/login`,
    register: `${baseUrl}/register`,
    getUserDetails: `${baseUrl}/1/user`,
    getGames: `${baseUrl}/games/list`,
    getGameDetails: (gameState) => { return `${baseUrl}/games/gameDetails/${gameState}` },
    getPlayerByGame: (id, gameState) => {return `${baseUrl}/games/${gameState}players/${id}`}
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