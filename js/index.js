'use strict';
var CommonFunc = require('../com_js/commonFunc.js');
var SurveyObject = require('./SurveyObject.js');
var SampleGround = require('./sampleGround');
var TableV1 = require('./S2031185_tableV1');
var TableV2 = require('./S2031185_tableV2');
var fs = require('fs');
var http = require('http');
var path = require('path');
/*npm install node-static*/
var FileSaver = require('file-saver');

//var addNewObject = document.getElementById('addNewObject');
document.getElementById('addNewObject').addEventListener("click", saveToLocalStorage);

//ГЛОБАЛЬНЫЙ ОБЪЕКТ
var surveyObj;
module.exports = surveyObj;

function saveToLocalStorage() {

    var surveyObjJson = JSON.stringify(surveyObj);

    /*
    fs.writeFile("test14.txt", surveyObjJson, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Файл сохранен.");
        }
    });


     localStorage.setItem(surveyObj.objTemplate().title.name, surveyObjJson);
     console.log('Сохранение на localStorage');
     */


    var text = 'как записать строку в файл ".txt" с помощью js?';

    document.write('<a href="data:text/plain;charset=utf-8,%EF%BB%BF'
        + encodeURIComponent(surveyObjJson) + '" download="surveyObjJson.json">textj.txt</a>');

    console.log('Сохранение на localStorage');
}




function createNewObject() {
    surveyObj = new SurveyObject();
    console.log('Создан новый объект');
}

function setTitle() {
    surveyObj.objTemplate().title.name = 'Новый2';

    surveyObj.objTemplate().title.name
        = document.getElementById('surveyObject-title-name_d').value;

    document.getElementById('surveyObject-title-mark_d').value
        = surveyObj.objTemplate().title.name;

    console.info('Заполнение ' + surveyObj.objTemplate().title.name);
}

function setProp(id, prop) {
    surveyObj.objTemplate().prop
        = document.getElementById(id).value;
    console.info('Заполнение ' + surveyObj.objTemplate().prop);
}

function testValueRange(key, value) {
    if (value >= key.notAggress.min && value < key.notAggress.max) {
        return key.notAggress.conclusion;
    }
    if (value >= key.minAggress.min && value < key.minAggress.max) {
        return key.minAggress.conclusion;
    }
    if (value >= key.middleAggress.min && value < key.middleAggress.max) {
        return key.middleAggress.conclusion;
    }
    if (value >= key.highAggress.min && value < key.highAggress.max) {
        return key.highAggress.conclusion;
    }
}

function push_click() {
    document.getElementById('reportFrame').contentWindow.document.
    getElementById('objectCode_d').innerHTML = 'innerText';
    //window.frames[0].document.getElementById(id).innerHTML = innerText;
}

function test(id, innerText) {
    document.getElementById(id).innerHTML = innerText;
}



