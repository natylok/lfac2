const currentLocation = fixLocationHash(currentLocation);
    
const LOGO_OPTIONS = [
    { name: 'Games', isActive: this.state === currentLocation,state:'games' },
    { name: 'Clans', isActive: this.state === currentLocation, state: 'clans' }
];

const fixLocationHash = (item) => {
     item = item.replace('#/',"");
     return item;
}
export default LOGO_OPTIONS;