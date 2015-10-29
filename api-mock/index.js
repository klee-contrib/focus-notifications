var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser')
var port = 9999;
var notificationsJSON = require('./notifs.json');
var moment = require('moment');
var args = process.argv.slice(2);
var baseDir = './';
if (args.length > 0) {
   baseDir = args[0];
}
var staticFolder = __dirname;

var app = express();
app.use(express.static(staticFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(function(req, res, next) {
   console.log(new Date() + ', ' + req.method + ', ' + req.url);
   if (!_.isEmpty(req.body)) {
       console.log(req.body);
   }
   next();
});
//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header('Content-Type', 'application/json');
  next();
}
app.use(allowCrossDomain);

app.get('/notifications', function(req, res) {
    res.json(notificationsJSON);}
);

app.get('/notification/create', function(req, res) {
    var date = moment().format('L');
    notificationsJSON.push({uuid: notificationsJSON.length, "type": "pinterest", "title": "notification title " + date,"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem condimentum, condimentum odio quis, temp. Ut aliquet libero sit amet neque bibendum rhoncus. ", "creationDate": "2015-10-14T15:33:34.849Z", "sender": "Ares", "targetUrl": "http://labs.qnimate.com/portfolio-materialize/images/profile.png", "icon" : "http://mistermstudio.com/img/cms/Mister%20M/reseaux/pinterest.png"})
    res.json(notificationsJSON);}
);

app.get('/notifications/user/:name', function(req, res) {
   res.json(_.find(notificationsJSON, function(notification) {
       return notification.author == req.params.name;
   }));
});

// Server
var server = app.listen(port, function() {
 var port = server.address().port;
 console.log('Mocked NOTIFICATION API listening at http://localhost:%s', port);
});
