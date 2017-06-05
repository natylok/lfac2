import lolProfileService from './lol/index';

console.log(lolProfileService);
let gameProfileService = {}

gameProfileService.lol = lolProfileService;

export default gameProfileService;