var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostName = "localhost";
var port = 3000;

var app = express();
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

app.use(morgan('dev'));
app.use(bodyParser.json());

dishRouter.route('/')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send all the dishes to you!');
    })
    .post(function(req, res, next) {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .put(function(req, res, next) {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Deleting dish: ' + req.params.dishId);
    });

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostName, function() {
    console.log(`Server running at http://${hostName}:${port}/`);
});



// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// var hostName = "localhost";
// var port = 3000;

// var server = http.createServer(function(req, res) {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/html'
//     // });
//     // res.end('<h1>Hello World!!</h1>');

//     console.log('Request for ' + req.url + ' by method ' + req.method);
//     if (req.method == 'GET') {
//         var fileUrl;
//         if (req.url == '/')
//             fileUrl = '/index.html';
//         else
//             fileUrl = req.url;

//         var filePath = path.resolve('../public' + fileUrl);
//         var fileExt = path.extname(filePath);
//         if (fileExt == '.html') {

//             console.log(filePath);
//             fs.exists(filePath, function(exists) {
//                 if (!exists) {
//                     res.writeHead(404, { 'Content-Type': 'text/html' });
//                     res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 fs.createReadStream(filePath).pipe(res);
//             });
//         } else {

//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.end('<html><body><h1>Error 404: ' + fileUrl +
//                 ' not a HTML file</h1></body></html>');
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<html><body><h1>Error 404: ' + req.method +
//             ' not supported</h1></body></html>');
//     }
// })

// server.listen(port, hostName, function() {
//     console.log(`Server running at http://${hostName}:${port}`);
// });