let lolProfileService = {
    getLolRankOptions: function() {
        return [
            { text: 'bronze', value: 'bronze', key: 'bronze', image: { src:'/assets/games/lol/lol.png'} },
            { text: 'silver', value: 'silver', key: 'silver', image: { src: '/assets/games/lol/lol.png' }},
            { text: 'gold', value: 'gold', key: 'gold', image: { src: '/assets/games/lol/lol.png' }},
            { text: 'platinum', value: 'platinum', key: 'platinum', image: { src: '/assets/games/lol/lol.png' }},
            { text: 'daimond', value: 'daimond', key: 'daimond', image: { src: '/assets/games/lol/lol.png' } }
        ];
    },
    getLolRoles: function () {
        return [
            { text: 'ADC', value: 'ADC', key: 'ADC' },
            { text: 'Mid', value: 'Mid', key: 'Mid' },
            { text: 'Top', value: 'Top', key: 'Top' },
            { text: 'Support', value: 'Support', key: 'Support' },
            { text: 'Jungle', value: 'Jungle', key: 'Jungle' }
        ];
    },
    getServerList: function() {
        return [
            { text: 'Europe East', value: 'europeEast', key: 'europeEast' },
            { text: 'Europe West', value: 'europeWest', key: 'europeWest' },
            { text: 'North America', value: 'NA', key: 'NA' }
        ]
    }
}
export default lolProfileService;