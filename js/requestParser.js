function readStreamAsJson(stream, callback) {
    var data = "";
    stream.on('data', function (chunk) {
        data += chunk;
    });

    stream.on('end', function () {
        var result;
        var error;
        try {
            result = JSON.parse(data);
        }
        catch (e) {
            error = e;
        }

        callback(error, result);
    });

    stream.on('error', function (error) {
        callback(error);
    });
}
