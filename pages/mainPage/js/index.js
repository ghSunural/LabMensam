'use strict';
//ГЛОБАЛЬНЫЙ ОБЪЕКТ
;(function (exports) {

    var surveyObj;

    exports.createNewObject = function()  {
        var objectWindow = window.open('surveyObjectPage.html');
        surveyObj = new SurveyObject();
        console.log('Создан новый объект');
        console.log(surveyObj.objTemplate());

    };

    exports.setGeneralInfo = function()  {

        surveyObj.objTemplate().title.mark = funcLib.getInnerText('titleMark');
        surveyObj.objTemplate().title.name = funcLib.getInnerText('titleName');
        console.log(surveyObj.objTemplate());
        console.log('в изменеиии');
    };



}(window.mainPage = {}));







