const fixLocationHash = (item) => {
    item = item.replace('#/', "");
    return item;
}
let currentLocation = fixLocationHash(window.location.hash);
currentLocation = currentLocation != "" ? currentLocation : "games";
const LOGO_OPTIONS = [
    { name: 'Games', isActive: currentLocation === 'games' ,state:'games' },
    { name: 'Clans', isActive: currentLocation === 'clans' ,state: 'clans' }
];


export default LOGO_OPTIONS;