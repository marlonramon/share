var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var session = require('express-session');
//var passport = require('passport');
var helmet = require('helmet');


module.exports = function() {

  var app = express();
  
  app.set('port', 3001);

  app.set('view engine', 'ejs');
  app.set('views','./server/app/views');

  // novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  
  
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.disable('x-powered-by');

  load('models', {cwd: 'server/app'})
    .then('controllers')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

  app.get('*', function(req, res) {
     res.status(404).render('404');
  });

  return app;
};