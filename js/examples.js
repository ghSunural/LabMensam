'use strict';
var arr = [2, 3, 5, 6];
console.log(arr);

console.log('');
console.log('slice');
var arrSlice = arr.slice(0);
console.log(arr.slice(0));
console.log(arr.slice(1, 3));

console.log('');
console.log('map');
var inc = function (arg) {
    return 2 + arg;
};
console.log(arr.map(inc));

console.log(arr.map(function (arg) {
    return ++arg;
}));


console.log('');
console.log('concat');
var addition = 'addition';
console.log(arr.concat(addition));
console.log(addition.concat(addition));

console.log('');
console.log('some');
var isConcretNumber = function (arg) {
    return arg === 5;
};
console.log(arr.some(isConcretNumber));

console.log('');
console.log('push');
console.log(arr.push('add'));
console.log(arr);

console.log('');
console.log('pop');
console.log(arr.pop());
console.log(arr);

console.log('');
console.log('exec');
//var str = 'бла-бла-бла';
//var marth = str.exec('бла');
//console.log(marth);

console.log('');
console.log('callback');
var summ = new Function('x', 'y', 'return x + y;');
console.log(summ(5, 10));

function fwcb(x, y, callback){
    var z = x + y;
    callback(z);
}

fwcb(1, 2, function (ff) {
    console.log(ff);
});

