var http = require('http');
var ecstatic = require('ecstatic');
//файловый сервер
var Router = require('./router');


var fileServer = ecstatic(
    {
        root: '.././forms'
    }
);
var router = new Router();
var port = '8000';

http.createServer(function (request, response) {
    if (!router.resolve(request, response)) {
        fileServer(request, response);
    }
}).listen(port);


function respond(response, status, data, type) {
    response.writeHead(status, {
        'Content-Type': type || 'text/plain'
    });
    response.end(data);
}

function respondJSON(response, status, data) {
    respond(response, status, JSON.stringify(data), 'application/json');
}

var objects = Object.create(null);

router.add("PUT", /^\/objects\/([^\/]+)$/,
    function (request, response, title) {
        if (title in objects) {
            respondJSON(response, 200, objects[title]);
        }
        else {
            respond(response, 404, 'Объект не найден');
        }
    }
);

router.add("DELETE", /^\/objects\/([^\/]+)$/,
    function (request, response, title) {
        if (title in objects) {
            delete objects[title];
            registerChange(title);
        }
        respond(response, 204, null);
    }
);



