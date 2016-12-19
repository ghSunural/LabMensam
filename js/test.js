'use strict';
/*var v1 = 1;
 var callCount = (function () {
 var count = 0;

 // console.info(v);
 return function () {
 console.info(++count);
 }
 })();

 callCount();
 callCount();
 callCount();

 */


//this.min
//typeof
//closure



var surveyObj = require('../js/index');
var fs = require('fs');

var surveyObjJson = JSON.stringify(surveyObj);

fs.writeFile("test14.json",surveyObjJson ,function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
});

/*
 localStorage.setItem(surveyObj.objTemplate().title.name, surveyObjJson);
 console.log('Сохранение на localStorage');
 */

console.log('Сохранение на localStorage');


