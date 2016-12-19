'use strict';
//https://habrahabr.ru/post/246331/
var url = require('url');

var Router = function () {
    this.routes = [];
    Router.prototype.add = function (method, url, handler) {
        this.routes.push(
            {
                method: method,
                url: url,
                handler: handler //обработчик
            }
        )
    };
};


Router.prototype.resolve = function (request, response) {

    var path = url.parse(request.url).pathname;

    //exec Выполняет поиск совпадений в указанной строке

    //Метод some() проверяет, удовлетворяет ли хоть
    //какой-нибудь элемент массива условию,
    //заданному в передаваемой функции
    //match сочетание
    return this.routes.some(
        function (route) {
            var match = route.url.exec(path);
            if (!match || route.method != request.method) {
                return false;
            }
            //Метод map() создаёт новый массив с результатом вызова
            //указанной функции для каждого элемента массива.
            //slice(1) - все кроме 0-го
            var urlParts = match.slice(1).map(decodeURIComponent);
            route.handler.apply(null, [request, response].concat(urlParts));
            return true;
        }
    )
};


module.exports = Router;
