'use strict';
console.log('Загрузка страницы ввода пробы грунта...');

;(function (exports) {

    exports.inputForm = document.forms['entrySampleGroundInputForm'];
    console.log('Форма ввода "entrySampleGroundInputForm" инициализирована');

    funcLib.setHandler('addNewSampleGroundButton', 'click',
        ESGF.add, function () {
        });

    funcLib.setHandler('deleteSampleGroundButton', 'click',
        ESGF.delete, function () {
        });


    funcLib.setHandler('gsampleLoadOpenDialog', 'change',
        ESGF.openGSample, function () {
        });


    funcLib.setHandler('saveSampleButton', 'click',
        ESGF.save, function () {
        });


    funcLib.setHandler('amendSampleButton', 'click',
        ESGF.replace, function () {
        });

    funcLib.setHandler('reportCompleteButton', 'click',
        ESGF.reportComplete, function () {
        });

}(window.esgFLoad = {}));


console.log(window.esgFLoad.inputForm);