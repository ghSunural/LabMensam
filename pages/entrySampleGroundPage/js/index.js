"use strict";

;(function(exports) {

    exports.isLink = "ESGF - связь установлена";

    exports.add = function () {
        console.info('Добавление пробы грунта');
        exports.report = (new GSample.TSample()).inst();
    };

    exports.delete = function () {
        console.info('Удаление пробы грунта');

    };

    exports.replace = function () {
        console.info('Обновление пробы грунта');
      //  var inputForm = OnLoad_esgP.inputForm;
     //  NewGSample.info.labNo = inputForm.labNo.value;
    };

    exports.openGSample = function () {

        var openDialog = document.getElementById('gsampleLoadOpenDialog');

        var obj = funcLib.readFile(openDialog);
        console.log(obj);
    };


    exports.save = function () {
        console.info('Сохранение пробы грунта');
        var groundSample = new GSample.TSample();
        groundSample.saveToFile();
        //  var inputForm = OnLoad_esgP.inputForm;
        //  NewGSample.info.labNo = inputForm.labNo.value;
    };

    exports.reportComplete = function () {
        console.info('Формирование отчета');
        exports.reportWin = window.open('AgReportPage.html');

    };

}(window.ESGF = {}));





