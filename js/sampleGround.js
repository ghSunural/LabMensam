'use strict';
function SampleGround() {

    this.sampleGround = {
        info: {
            labNo: 'def-number',
            ege: 'def-ege',
            hole: {
                kind: 'def-hole',
                no: '',
                depth: 'def-depth'
            },
            date: 'def-date',
            wetZone: 'def-wetZone',
            temperatura: 'def-temperatura'
        },

        prop: {
            cemical: {
                SO42: 'def-SO4',
                Cl: 'def-Cl',
                pH: 'def-pH',
                mGumus: 'def-mNO3',
                mNO3: 'def-mNO3',
                mCl: 'def-mCl',
                mFe: 'def-mFe'
            },
            electrical: {
                ro: 'def-ro',
                i: 'def-i'
            }
        },

        aggress: {
            sulfate: {
                toPcW4: '-',
                toPcW6: '-',
                toPcW8: '-',
                toPcW10W14: '-',
                toPcW16W20: '-',

                toPcPlusW4: '-',
                toPcPlusW6: '-',
                toPcPlusW8: '-',
                toPcPlusW10W14: '-',
                toPcPlusW16W20: '-',

                toSulphateCementW4: '-',
                toSulphateCementW6: '-',
                toSulphateCementW8: '-',
                toSulphateCementW10W14: '-',
                toSulphateCementW16W20: '-'
            },

            chloride: {
                k20: 1,
                to20W4W6: '-',
                to20W8: '-',
                to20W10W14: '-',

                k25: 1.5,
                to25W4W6: '-',
                to25W8: '-',
                to25W10W14: '-',

                k30: 1.7,
                to30W4W6: '-',
                to30W8: '-',
                to30W10W14: '-',

                k50: 3,
                to50W4W6: '-',
                to50W8: '-',
                to50W10W14: '-'
            }
        }
    };

    SampleGround.prototype.sampleGroundTemplate = function () {
        return this.sampleGround;
    }

}



module.exports = SampleGround;