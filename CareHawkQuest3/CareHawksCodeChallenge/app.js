var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const http = require('http');
require('dotenv').config('./app');
const fileUpload = require('express-fileupload');




var bookRouter = require('./routes/bookroute');


var app = express();

// view engine setup
app.use(fileUpload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( bookRouter);


// configure and setup sqlite database
const db = require('./databaseConfig/database');
try 
{

  db.authenticate();

  console.log('Connection has been established successfully.');

} 
catch (error) 
{
  console.error('Unable to connect to the database:', error);
}

// uses sequilize to create model (0bject) that is map to database table 
require('./model/Books');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



 /******************* Service Launch *****************/
 try {

  const server = http.createServer(app);
  server.setTimeout(48*60*60*1000); // 10 * 60 seconds * 1000 msecs
  server.keepAliveTimeout=48*60*60*1000;
  server.listen(process.env.PORT, function () {
      
      console.log(`running on ${(global.BASE_URL && global.BASE_URL !== '') ? global.BASE_URL : `http://${process.env.HOST}:${process.env.PORT}`}`);
     
  });
  
server.on('error', onError);


} catch (error) {
console.error(error);
}


function onError(error) {
if (error.syscall !== 'listen') {
throw error;
}

var bind = typeof port === 'string'
? 'Pipe ' + port
: 'Port ' + port;

// handle specific listen errors with friendly messages
switch (error.code) {
case 'EACCES':
  console.error(bind + ' requires elevated privileges');
  process.exit(1);
  break;
case 'EADDRINUSE':
  console.error(bind + ' is already in use');
  process.exit(1);
  break;
default:
  throw error;
}
}



module.exports = app;
