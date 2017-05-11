'use strict';
console.log('Загрузка страницы отчета...');
//window.reportSG.onload
;(function () {

    var groundSample = new window.opener.GSample.TSample();
    groundSample.setAggress();
    var sample = groundSample.inst();

    var inputFormAdapter = window.opener.esgFLoad.inputForm;

    sample.info.labNo = inputFormAdapter.labNo.value;
    sample.info.IGE = inputFormAdapter.IGE.value;
    sample.info.hole.no = inputFormAdapter.holeNo.value;
    sample.info.hole.kind = inputFormAdapter.holeKind.value;
    sample.info.getDepth = inputFormAdapter.getDepth.value;
    sample.info.getDate = inputFormAdapter.getDate.value;

    sample.prop.cemical.SO42 =  inputFormAdapter.SO42.value;
    sample.prop.cemical.Cl =  inputFormAdapter.Cl.value;
    sample.prop.cemical.mGumus =  inputFormAdapter.mGumus.value;
    sample.prop.cemical.mNO3 =  inputFormAdapter.mNO3.value;
    sample.prop.cemical.mCl =  inputFormAdapter.mCl.value;
    sample.prop.cemical.mFe =  inputFormAdapter.mFe.value;
    sample.prop.cemical.pH =  inputFormAdapter.pH.value;
    sample.prop.electrical.ro =  inputFormAdapter.ro.value;
    sample.prop.electrical.I =  inputFormAdapter.I.value;

    console.log(inputFormAdapter);

    var adapter = sample;

    var GroundReportIdList = {

        labNo: adapter.info.labNo,
        IGE: adapter.info.IGE,
        holeKind: adapter.info.hole.kind,
        holeNo: adapter.info.hole.no,
        getDepth: adapter.info.getDepth,
        getDate: adapter.info.getDate,

        SO42: adapter.prop.cemical.SO42,
        Cl: adapter.prop.cemical.Cl,
        pH: adapter.prop.cemical.pH,
        mGumus: adapter.prop.cemical.mGumus,
        mNO3: adapter.prop.cemical.mNO3,
        mCl: adapter.prop.cemical.mCl,
        mFe: adapter.prop.cemical.mFe,

        ro: adapter.prop.electrical.ro,
        I: adapter.prop.electrical.I,

        toPcW4: adapter.aggress.sulfate.toPcW4,
        toPcW6: adapter.aggress.sulfate.toPcW6,
        toPcW8: adapter.aggress.sulfate.toPcW8,
        toPcW10W14: adapter.aggress.sulfate.toPcW10W14,
        toPcW16W20: adapter.aggress.sulfate.toPcW16W20,

        toPcPlusW4: adapter.aggress.sulfate.toPcPlusW4,
        toPcPlusW6: adapter.aggress.sulfate.toPcPlusW6,
        toPcPlusW8: adapter.aggress.sulfate.toPcPlusW8,
        toPcPlusW10W14: adapter.aggress.sulfate.toPcPlusW10W14,
        toPcPlusW16W20: adapter.aggress.sulfate.toPcPlusW16W20,

        toSulphateCementW4: adapter.aggress.sulfate.toSulphateCementW4,
        toSulphateCementW6: adapter.aggress.sulfate.toSulphateCementW6,
        toSulphateCementW8: adapter.aggress.sulfate.toSulphateCementW8,
        toSulphateCementW10W14: adapter.aggress.sulfate.toSulphateCementW10W14,
        toSulphateCementW16W20: adapter.aggress.sulfate.toSulphateCementW16W20,

        to20W4W6: adapter.aggress.chloride.thickness20.toW4W6,
        to20W8: adapter.aggress.chloride.thickness20.toW8,
        to20W10W14: adapter.aggress.chloride.thickness20.toW10W14,

        to25W4W6: adapter.aggress.chloride.thickness25.toW4W6,
        to25W8: adapter.aggress.chloride.thickness25.toW8,
        to25W10W14: adapter.aggress.chloride.thickness25.toW10W14,

        to30W4W6: adapter.aggress.chloride.thickness30.toW4W6,
        to30W8: adapter.aggress.chloride.thickness30.toW8,
        to30W10W14: adapter.aggress.chloride.thickness30.toW10W14,

        to50W4W6: adapter.aggress.chloride.thickness50.toW4W6,
        to50W8: adapter.aggress.chloride.thickness50.toW8,
        to50W10W14: adapter.aggress.chloride.thickness50.toW10W14,

        underLevel: adapter.aggress.corrToMet.underLevel,
        aboveLevel: adapter.aggress.corrToMet.aboveLevel,

        stalRo: adapter.aggress.corrosion.steelRo,
        stalI: adapter.aggress.corrosion.steelI,
        stalRes: adapter.aggress.corrosion.steelRes,

        pbPh: adapter.aggress.corrosion.pbPh,
        pbGumus: adapter.aggress.corrosion.pbGumus,
        pbNO: adapter.aggress.corrosion.pbNO,
        pbRes: adapter.aggress.corrosion.pbRes,

        alPh: adapter.aggress.corrosion.alPh,
        alCl: adapter.aggress.corrosion.alCl,
        alFe: adapter.aggress.corrosion.alFe,
        alRes: adapter.aggress.corrosion.alRes


    };

    for (var id in GroundReportIdList) {
        funcLib.pushHtml(id, GroundReportIdList[id]);
    }

}());







