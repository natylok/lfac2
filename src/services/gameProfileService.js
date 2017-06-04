let gameProfileService = {
    getLolRankOptions: function(){
        return [
            { text: 'bronze', value: 'bronze', key: 'bronze'},
            { text: 'silver', value: 'silver', key: 'silver' },
            { text: 'gold', value: 'gold', key: 'gold'},
            { text: 'platinum', value: 'platinum', key: 'platinum' },
            { text: 'daimond', value: 'daimond', key:'daimond'}
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
    }
}

export default gameProfileService;