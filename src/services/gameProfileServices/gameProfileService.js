import lolProfileService from './lol/lolProfileService';

console.log(lolProfileService);
let gameProfileService = {}

gameProfileService.lol = lolProfileService;

export default gameProfileService;