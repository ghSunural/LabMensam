var S2031185_tableV2_ChlorideAggress = {

    to20W4W6: {
        notAggress: {
            min: 0,
            max: 250,
            conclusion: 'неагрессивная'
        },

        minAggress: {
            min: 250,
            max: 500,
            conclusion: 'слабоагрессивная'
        },

        middleAggress: {
            min: 500,
            max: 1000,
            conclusion: 'среднеагрессивная'
        },

        highAggress: {
            min: 1000,
            max: Infinity,
            conclusion: 'сильноагрессивная'
        }
    },

    to20W8: {
        notAggress: {
            min: 0,
            max: 500,
            conclusion: 'неагрессивная'
        },

        minAggress: {
            min: 500,
            max: 1000,
            conclusion: 'слабоагрессивная'
        },

        middleAggress: {
            min: 1000,
            max: 7500,
            conclusion: 'среднеагрессивная'
        },

        highAggress: {
            min: 7500,
            max: Infinity,
            conclusion: 'сильноагрессивная'
        }
    },


    to20W10W14: {
        notAggress: {
            min: 0,
            max: 1000,
            conclusion: 'неагрессивная'
        },

        minAggress: {
            min: 1000,
            max: 7500,
            conclusion: 'слабоагрессивная'
        },

        middleAggress: {
            min: 7500,
            max: 10000,
            conclusion: 'среднеагрессивная'
        },

        highAggress: {
            min: 10000,
            max: Infinity,
            conclusion: 'сильноагрессивная'
        }
    }

};

module.exports = S2031185_tableV2_ChlorideAggress;
