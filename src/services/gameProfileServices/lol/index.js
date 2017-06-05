let lolProfileService = {
    getLolRankOptions: function() {
        return [
            { text: 'bronze', value: 'bronze', key: 'bronze' },
            { text: 'silver', value: 'silver', key: 'silver' },
            { text: 'gold', value: 'gold', key: 'gold' },
            { text: 'platinum', value: 'platinum', key: 'platinum' },
            { text: 'daimond', value: 'daimond', key: 'daimond' }
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