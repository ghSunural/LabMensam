'use strict';
;(function (exports) {

    function TSample() {

        this.sample = {
            info: {
                labNo: 'def-Lab',
                IGE: 'def-IGE',
                hole: {
                    kind: 'def-hole',
                    no: 'def-no'
                },
                getDepth: 'def-depth',
                getDate: 'def-date'

            },

            prop: {
                cemical: {
                    //'def-SO4'
                    SO42: 'def-SO4',
                    //'def-Cl'
                    Cl: 'def-Cl',
                    pH: 'def-pH',
                    mGumus: 'def-mGumus',
                    mNO3: 'def-mNO3',
                    mCl: 'def-mCl',
                    mFe: 'def-mFe'
                },
                electrical: {
                    ro: 'def-ro',
                    I: 'def-i'
                }
            },

            aggress: {
                sulfate: {
                    toPcW4: 'def-toPcW4',
                    toPcW6: 'def-toPcW6',
                    toPcW8: 'def-toPcW8',
                    toPcW10W14: 'def-toPcW10W14',
                    toPcW16W20: 'def-toPcW16W20',

                    toPcPlusW4: 'def-toPcPlusW4',
                    toPcPlusW6: 'def-toPcPlusW6',
                    toPcPlusW8: 'def-toPcPlusW8',
                    toPcPlusW10W14: 'toPcPlusW10W14',
                    toPcPlusW16W20: 'toPcPlusW16W20',

                    toSulphateCementW4: 'def-toSCementW4',
                    toSulphateCementW6: 'def-toSCementW6',
                    toSulphateCementW8: 'def-toSCementW8',
                    toSulphateCementW10W14: 'def-toSCementW10W14',
                    toSulphateCementW16W20: 'def-toSCementW16W20'
                },

                chloride: {

                    thickness20: {
                        k: 1,
                        toW4W6: 'def-to20W4W6',
                        toW8: 'def-to20W8',
                        toW10W14: 'def-to20W10W14'
                    },


                    thickness25: {
                        k: 1.5,
                        toW4W6: 'def-to25W4W6',
                        toW8: 'def-to25W8',
                        toW10W14: 'def-to25W10W14'
                    },

                    thickness30: {
                        k: 1.7,
                        toW4W6: 'def-to30W4W6',
                        toW8: 'def-to30W8',
                        toW10W14: 'def-to30W10W14'
                    },

                    thickness50: {
                        k: 3,
                        toW4W6: 'def-to50W4W6',
                        toW8: 'def-to50W8',
                        toW10W14: 'def-to50W10W14'
                    }

                },

                corrToMet: {
                    underLevel: 'def-under',
                    aboveLevel: 'def-above'
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

            }
        };

        TSample.prototype.inst = function () {
            return this.sample;
        };

        TSample.prototype.saveToFile = function () {
            funcLib.saveToFile(this.sample, this.sample.info.labNo);
        };

        TSample.prototype.setAggress = function () {

            this.setSulfAggress();
            this.setChlorideAggress(this.sample.aggress.chloride.thickness20);
            this.setChlorideAggress(this.sample.aggress.chloride.thickness25);
            this.setChlorideAggress(this.sample.aggress.chloride.thickness30);
            this.setChlorideAggress(this.sample.aggress.chloride.thickness50);
        };

        this.setSulfAggress = function () {

            var toBetonMark; //key

            var valueSO42 = this.sample.prop.cemical.SO42;
            var sampleSulfAgreess = this.sample.aggress.sulfate;

            var sulfSNIP = window.SNIPS.sulfateAggress;

            for (toBetonMark in sulfSNIP) {
                sampleSulfAgreess[toBetonMark] =
                    funcLib.testValueRange(sulfSNIP[toBetonMark], valueSO42, 1);
            }
        };

        this.setChlorideAggress = function (thickness) {

            var toBetonMark; //key
            var clSNIP = window.SNIPS.chlorideAggress;
            var valueCl = this.sample.prop.cemical.Cl;

            var sampleClAgreess = thickness;
            var K = thickness.k;

            for (toBetonMark in clSNIP) {
                sampleClAgreess[toBetonMark] =
                    funcLib.testValueRange(clSNIP[toBetonMark], valueCl, K);
            }




        };


    }

    exports.TSample = TSample;

}(window.GSample = {}));






