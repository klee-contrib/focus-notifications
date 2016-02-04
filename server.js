"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const moment = require('moment');

const webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;

const NB_GENERATED_NOTIF = 10;
let notificationsJSON = [];//require('./api-mock/notifs.json');


//let notificationsJSON = [];
for(let i = 0; i < NB_GENERATED_NOTIF; i++){
   notificationsJSON.push(
       {
        uuid: faker.random.uuid(),
        type: faker.name.jobDescriptor(),
        title: faker.lorem.sentence() ,
        content: faker.lorem.sentences(),
        creationDate:  i < 5 ? faker.date.recent() : faker.date.past(),
        sender: faker.name.lastName(),
        targetUrl: faker.internet.url(),
        icon : faker.image.nature()
      }
   );
}


console.log('LLLLLLLLLLL')
console.log('%j', notificationsJSON);
console.log('LLLLLLLLLLL')


const MOCKED_API_PORT = process.env.API_PORT || 9999;

/*****************************************
********* Webpack dev server *************
******************************************/

webpackConfig.externals = undefined; // Remove externals to make the app run in the dev server
serverLauncher(webpackConfig);

/*****************************************
************** Mocked API ****************
******************************************/

const app = express();
const API_ROOT = '/x/notification';



// Middlewares

app.use(function corsMiddleware(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE');
    res.header('Content-Type', 'application/json');
    next();
});
app.use(bodyParser.json());

app.get(API_ROOT  + '/notifications', function getAllNotifications(req, res) {
    res.json(notificationsJSON);}
);

app.get(API_ROOT  + '/notification/create', function createNotifs(req, res) {
    var date = moment().format('L');
    notificationsJSON.push({uuid: notificationsJSON.length, "type": "pinterest", "title": "notification title " + date,"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem condimentum, condimentum odio quis, temp. Ut aliquet libero sit amet neque bibendum rhoncus. ", "creationDate": "2015-10-14T15:33:34.849Z", "sender": "Ares", "targetUrl": "http://labs.qnimate.com/portfolio-materialize/images/profile.png", "icon" : "http://mistermstudio.com/img/cms/Mister%20M/reseaux/pinterest.png"})
    res.json(notificationsJSON);}
);

app.get('/notifications/user/:name', function getNotifByUser(req, res) {
   res.json(_.find(notificationsJSON, function(notification) {
       return notification.author == req.params.name;
   }));
});
app.delete(API_ROOT  + '/notifications', function deleteNotifs(req, res) {
    res.json(JSON.stringify(req.body));

});
app.delete(API_ROOT  + '/notifications/:id', function deleteNotif(req, res) {
    res.json({id: req.params.id});
 // res.send('DELETE request to homepage'+req.params.id );
});




const server = app.listen(MOCKED_API_PORT, function serverCallback() {
    console.log('Mocked notification API listening at http://localhost:%s', MOCKED_API_PORT);
});
