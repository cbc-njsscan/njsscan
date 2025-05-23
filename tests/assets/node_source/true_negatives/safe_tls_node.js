var request = require('request');

//corresponding function for each api call to tortuga gateway, allows easy calling and can store user key

module.exports = {

    'status': function (callback) {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
        request.get('https://dev.app.idt.net/v1/status?user_key=' + use_key, function (err, response, body) {
            if (err) callback(err);

            var status = JSON.parse(body);
            callback(err, status);
        })
    },
    'fund': function (json, callback) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
        request.post({
            uri: 'https://dev.app.idt.net/v1/charges?user_key=' + use_key,
            json: json,
            method: 'POST'
        },
            function (err, response, body) {
                if (err) callback(err);

                callback(err, response);
            })

    },
}


var http = require('http');
var curl = require('node-curl');

http.createServer(function (request, response) {

    var url = 'https://url';
    url += request.url;

    console.log(url);


    curl(url,
        {
            SSL_VERIFYPEER: 1
        },
        function (err) {
            response.end(this.body);
        })

}).listen(8000);
