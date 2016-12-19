'use strict';

/*на замыканиях*/

function pushContentToHtml(id, innerText) {
   window.frames[0].document.getElementById(id).innerHTML = innerText;
}


//document.getElementById('testButton').onclick = pushContentToHtml('objectCode', 'НОВЫЙ ОБЪЕКТ');
//Функция вставки текста в блок HTML
/*pushContentToHtml= function(id, innerText) {
    document.getElementById(id).innerHTML = innerText;
}

exports.clearContent= function(id) {
    document.getElementById(id).innerHTML = ''; $(id).innerHTML = ''
}*/

//b = b || Infinity
/*
// !, + тоже сработает
;(function testSumm(s1, s2) {
    console.log(s1+s2);
})(1, 2);




module.exports = {
    fp: pushContentToHtml(id, innerText),
    fc: clearContent(id)
};
*/

