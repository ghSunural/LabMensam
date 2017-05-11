'use strict';

;(function (exports) {

    // S2031185_tableV1_SulfateAggress
    exports.sulfateAggress = {
        toPcW4: {
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
                max: 1500,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 1500,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcW6: {
            notAggress: {
                min: 0,
                max: 1000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 1000,
                max: 1500,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 1500,
                max: 2000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 2000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcW8: {
            notAggress: {
                min: 0,
                max: 1500,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 1500,
                max: 2000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 2000,
                max: 3000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 3000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcW10W14: {
            notAggress: {
                min: 0,
                max: 2000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 2000,
                max: 3000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 3000,
                max: 4000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 4000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcW16W20: {
            notAggress: {
                min: 0,
                max: 3000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 3000,
                max: 4000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 4000,
                max: 5000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 5000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcPlusW4: {
            notAggress: {
                min: 0,
                max: 3000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 3000,
                max: 4000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 4000,
                max: 5000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 5000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcPlusW6: {
            notAggress: {
                min: 0,
                max: 4000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 4000,
                max: 5000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 5000,
                max: 8000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 8000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcPlusW8: {
            notAggress: {
                min: 0,
                max: 5000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 5000,
                max: 8000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 8000,
                max: 10000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 10000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcPlusW10W14: {
            notAggress: {
                min: 0,
                max: 8000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 8000,
                max: 10000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 10000,
                max: 12000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 12000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toPcPlusW16W20: {
            notAggress: {
                min: 0,
                max: 10000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 10000,
                max: 12000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 12000,
                max: 15000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 15000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toSulphateCementW4: {
            notAggress: {
                min: 0,
                max: 6000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 6000,
                max: 8000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 8000,
                max: 10000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 10000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toSulphateCementW6: {
            notAggress: {
                min: 0,
                max: 8000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 8000,
                max: 10000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 10000,
                max: 12000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 12000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toSulphateCementW8: {
            notAggress: {
                min: 0,
                max: 10000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 10000,
                max: 12000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 12000,
                max: 15000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 15000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toSulphateCementW10W14: {
            notAggress: {
                min: 0,
                max: 12000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 12000,
                max: 15000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 15000,
                max: 20000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 20000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        },

        toSulphateCementW16W20: {
            notAggress: {
                min: 0,
                max: 15000,
                conclusion: 'неагрессивная'
            },

            minAggress: {
                min: 15000,
                max: 20000,
                conclusion: 'слабоагрессивная'
            },

            middleAggress: {
                min: 20000,
                max: 24000,
                conclusion: 'среднеагрессивная'
            },

            highAggress: {
                min: 24000,
                max: Infinity,
                conclusion: 'сильноагрессивная'
            }
        }
    };
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
    //S2031185_tableV2_ChlorideAggress
    exports.chlorideAggress = {

        //для листа толщиной 20мм
        toW4W6: {
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

        toW8: {
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


        }

    };
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
    //ГОСТ 9.602
    exports.corrosionAggress = {

        ground: {

            toSteel: {
                factorRo: {

                    notAggress: {
                        min: 130,
                        max: Infinity,
                        conclusion: 'низкая'
                    },

                    minAggress: {
                        min: 50,
                        max: Infinity,
                        conclusion: 'низкая'
                    },

                    middleAggress: {
                        min: 20,
                        max: 50,
                        conclusion: 'средняя'
                    },

                    highAggress: {
                        min: 0,
                        max: 20,
                        conclusion: 'высокая'
                    }

                },

                factorI: {

                    minAggress: {
                        min: 0,
                        max: 0.05,
                        conclusion: 'низкая'
                    },

                    middleAggress: {
                        min: 0.05,
                        max: 0.20,
                        conclusion: 'средняя'
                    },

                    highAggress: {
                        min: 0.20,
                        max: Infinity,
                        conclusion: 'высокая'
                    }
                }

            },

            toPb: {

                factorPH: {

                    minAggress: {
                        min: 6.5,
                        max: 7.5,
                        conclusion: 'низкая'
                    },

                    middleAggress: {
                        min: 6,
                        max: 6.5,
                        conclusion: 'средняя'
                    },

                    middleAggress2: {
                        min: 7.5,
                        max: 9,
                        conclusion: 'средняя'
                    },

                    highAggress: {
                        min: 5,
                        max: 9,
                        conclusion: 'высокая'
                    }
                }
            },

            toAl: {}


        },

        water: {
            toPb: {},
            toAl: {}
        },


        corrosion: {


            steelRo: 'def-stalRo',
            steelI: 'def-stalI',
            steelRes: 'def-stalRes',

            pbPh: 'def-pbPh',
            pbGumus: 'def-pbGumus',
            pbNO: 'def-pbNO',
            pbRes: 'def-pbRes',

            alPh: 'def-alPh',
            alCl: 'def-alCl',
            alFe: 'def-alFe',
            alRes: 'def-alRes'

        }


    };


}(window.SNIPS = {}));


//module.exports = S2031185_tableV1_SulfateAggress;
//console.log(snipSulfateAggress.toPcPlusW8.highAggress.conclusion);