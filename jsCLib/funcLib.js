'use strict';
console.log('Загрузка библиотеки funcLib...');

;(function (exports) {
    /*
     exports.testValueRange = function (key, value, k) {
     //conclusion - заключение, диагноз
     for (var aggress in key){

     if (value >= k * (key.notAggress.min) && value < k * (key.notAggress.max)) {
     return key.notAggress.conclusion;
     }
     }

     };
     */


    exports.testValueRange = function (key, value, k) {
        //conclusion - заключение, диагноз
        if (value >= k * (key.notAggress.min) && value < k * (key.notAggress.max)) {
            return key.notAggress.conclusion;
        }
        if (value >= k * (key.minAggress.min) && value < k * (key.minAggress.max)) {
            return key.minAggress.conclusion;
        }
        if (value >= k * (key.middleAggress.min) && value < k * (key.middleAggress.max)) {
            return key.middleAggress.conclusion;
        }
        if (value >= k * (key.highAggress.min) && value < k * (key.highAggress.max)) {
            return key.highAggress.conclusion;
        }
    };


    exports.pushHtml = function (id, innerText) {
        document.getElementById(id).innerHTML = innerText;
    };

    exports.getInnerText = function (id) {

        return document.getElementById(id).value;
    };

    exports.setHandler = function (nodeId, event, handler, callback) {

        try {
            var elName = document.getElementById(nodeId);
            elName.addEventListener(event, handler);
            console.log('Добавлен обработчик ' + nodeId + '_' + event);
            callback();
        }
        catch (error) {
            console.log('Ошибка: обработчик '
                + nodeId + '_' + event + ' НЕ создан');
        }
    };

    exports.getJSON = function (object, fileName) {

        var jsonString = fileName;




        object = JSON.parse(jsonString);

        return object;

    };

    exports.readFile = function (openDialog) {
        var file = openDialog.files[0];
        var reader = new FileReader();
        var obj;
        reader.onload = function() {
            obj =  reader.result;
           // console.log(reader.result);
        };
        reader.readAsText(file);

        return obj;
    };

    exports.saveToLocalStorage = function (objectInst, name) {

        var objJSON = JSON.stringify(objectInst, '', 4);
        localStorage.setItem(name, objJSON);
        console.log('Сохранено на localStorage');

    };

    exports.saveToFile = function (objectInst, filename) {
        var objJSON = JSON.stringify(objectInst, '', 4);
        downloadFile(filename, objJSON);
        console.log('Сохранено в файле');
    };

    function downloadFile(filename, text) {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }

    exports.pushHtmltoFrame = function (id, innerText) {
        window.frames[0].document.getElementById(id).innerHTML = innerText;
        document.getElementById('reportFrame').contentWindow.document.getElementById('objectCode_d').innerHTML = 'innerText';
    };


    // window.funcLib = exports;
}(window.funcLib = {}));


/*

 <script type="text/javascript">
 function OnLoad()
 {
 httpRequest = new XMLHttpRequest();
 httpRequest.open("GET", "/test.txt", true);
 httpRequest.onreadystatechange = OnRequestStateChange;
 httpRequest.send(null);
 }

 function OnRequestStateChange()
 {
 if (httpRequest.readyState != 4)
 return;
 if (httpRequest.status != 200)
 return;
 document.getElementById("textPlace").innerHTML = httpRequest.responseText;
 }
 </script>
 */




