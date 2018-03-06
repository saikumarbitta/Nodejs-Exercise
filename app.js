
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load customers route
var skills = require('./routes/skills'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,content-length, Authorization, x-access-token');
 next();
});
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
  Connection Details
-------------------------------------------*/

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'Skills'

    },'pool') //or single

);



app.get('/', routes.index);
app.get('/api/skills', skills.list);
app.post('/api/skills', skills.add);
app.post('/api/skills/search', skills.search);
app.put('/api/skills/:id/update', skills.edit);
app.put('/api/skills/:id/approve', skills.status);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
