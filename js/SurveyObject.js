'use strict';
function SurveyObject() {

    this.surveyObject = {
        title: {
            mark: '00-000-00',
            name: 'def-name'
        },
        labManager: '',
        sampleGrounds: [],
        sampleWaters: []
    };


    SurveyObject.prototype.objTemplate = function () {
        return this.surveyObject;
    };

   /* SurveyObject.prototype.setObject = function (surveyObject) {
        this.surveyObject = surveyObject;
    };
    */
}

module.exports = SurveyObject;

