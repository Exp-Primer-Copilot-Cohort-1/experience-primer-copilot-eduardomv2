// CREATE WEB SERVER 

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    var query = querystring.parse(url_parts.query);

    if (url_parts.pathname == '/comment') {
        console.log('comment');
        var comment = query['comment'];
        console.log('comment: ' + comment);

        fs.appendFile('comments.txt', comment + '\n', function (err) {
            if (err) {
                console.log('Error: ' + err);
            }
        });

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Comment received: ' + comment);
    } else {
        fs.readFile('comments.txt', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(data);
        });
    }
}).listen(8080, ' localhost');
