var oauth2Controller = require('../controllers/oauth2');
var authController = require('../controllers/auth');
var clientController = require('../controllers/client');

module.exports = (app) => {

// Create endpoint handlers for oauth2 authorize
app.route('/api/oauth2/authorize')
.get(authController.isAuthenticated, oauth2Controller.authorization)
.post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
app.route('/api/oauth2/token')
.post(authController.isClientAuthenticated, oauth2Controller.token);


// Create endpoint handlers for /clients
app.route('/api/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

  
   


};

