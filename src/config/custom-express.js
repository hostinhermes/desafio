require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

var session = require('express-session');
var passport = require('passport');




app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
  }));
  
// Use the passport package in our application
app.use(passport.initialize());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

//Detecta enviroment
let env = process.env.NODE_ENV;
if(!env){
	env = 'development'
}

// Carrega configurações de acordo
let config = require(`./config.${env}.json`);
//Conecta ao banco
require('./database')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`)

const rotas = require('../app/routes/routes-users');
rotas(app);

const routeIssues = require('../app/routes/routes-issues');
routeIssues(app);

const routeOauth2 = require('../app/routes/routes-oauth2');
routeOauth2(app);

module.exports = app;






