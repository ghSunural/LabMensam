;(function (exports) {


    function TSample() {

        this.sample = {

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

        this.calcMg_mgDm3 = function (Mg_mEqDm3) {
            return Mg_mEqDm3 * 12.12;
        };

        this.calcNaK_mgDm3 = function (NaK_mEqDm3) {
            return NaK_mEqDm3 * 23;
        };

        this.calcCa_mgDm3 = function (Ca_mEqDm3) {
            return Ca_mEqDm3 * 20.04;
        };

        this.calcSO42_mgDm3 = function (Ca_mgSO42) {
            return Ca_mgSO42 * 4.114;
        };

        this.calcSO42_mEqDm3 = function (Ca_mgSO42) {
            return Ca_mgSO42 * 4.114 * 0.0208;
        };

        this.calcCl_mgDm3 = function (Cl_mEqDm3) {
            return Cl_mEqDm3 * 35.5;
        };

        this.calcHCO3_mgDm3 = function (HCO3_mEqDm3) {
            return HCO3_mEqDm3 * 61;
        };

    }

}(window.WSample = {}));

