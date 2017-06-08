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
            { text: 'ADC', value: 'ADC', key: 'ADC', image: { src: '/assets/games/lol/roles/adc.jpg' } },
            { text: 'Mid', value: 'Mid', key: 'Mid', image: { src: '/assets/games/lol/roles/mid.jpg' }},
            { text: 'Top', value: 'Top', key: 'Top', image: { src: '/assets/games/lol/roles/top.jpg' }},
            { text: 'Support', value: 'Support', key: 'Support', image: { src: '/assets/games/lol/roles/support.jpg' } },
            { text: 'Jungle', value: 'Jungle', key: 'Jungle', image: { src: '/assets/games/lol/roles/jungle.jpg' } }
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