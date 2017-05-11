'use strict';

function SurveyObject() {

    this.surveyObject = {
        title: {
            mark: '00-000-00',
            name: 'def-name'
        },
        labManager: '',
        wetZone: 'def-wetZone',
        temperatura: 'def-temperatura',
        groundSamples: [],
        waterSamples: []
    };


    SurveyObject.prototype.objTemplate = function () {
        return this.surveyObject;
    };




    /* SurveyObject.prototype.setObject = function (surveyObject) {
     this.surveyObject = surveyObject;
     };
     */
}

