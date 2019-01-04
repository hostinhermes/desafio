
let User = require('../models/User')
var indexTemplate = require('../views/index.marko')
var loginTemplate = require('../views/login/login.marko')
var userTemplateList = require('../views/users/list/list.marko')
const mongoose = require('mongoose');
const db = require('../../config/database');
var Client = require('../models/Client');
var authController = require('../controllers/auth');

module.exports = (app) => {
    
    app.get('/', authController.isAuthenticated, function(req, resp) {
        resp.marko(indexTemplate);
    });

    app.get('/login', function(req, resp) {
        resp.marko(require('../views/login/login.marko'));
    });

    app.post('/login', authController.isAuthenticated, function(req, resp) {
       
        resp.redirect('/?username='+req.body.username+'&password='+req.body.password);
    });

    app.get('/install', function(req, resp) {
        if(mongoose.connection.readyState){
            var user = new User({
                username: "admin",
                password: "admin",           
                email: "adm@admin.com", 
                role: "adm" ,
                createDate: Date.now() 
            })
           
            user.save(function (err) {
                console.log(err);
              });

              console.log(user._id);
            var client = new Client({
                name: "Client da Aplicação de Chamados",
                id: "id-totvs-chamados",           
                secret: "secret-totvs-chamados",
                userId : user._id
                 
            })
           
            client.save(function (err) {
                console.log(err);
              });
        }
        resp.send("Adicionado app client  e usuario default");
    });
    
    app.get('/users', authController.isAuthenticated, function(req, resp) {
        
        if(mongoose.connection.readyState){
            User.find({}).then((users) => {
               
                resp.marko(userTemplateList, {users: users});
            })
            .catch(erro => console.log(erro));
        }else{
       
            resp.marko(userTemplateList);
        }
       
    });

    app.get('/users/form', authController.isAuthenticated, function(req, resp) {
        
        resp.marko(require('../views/users/form/form.marko'), { user: {username:"", password:"", email:"", role:""} });
    });

    app.get('/users/form/:id', function(req, resp) {
        
        User.findById(req.params.id).then((user) => {
            
            resp.marko(
                require('../views/users/form/form.marko'), 
                { user: user }
            )
        })
        .catch(erro => console.log(erro));

        
    });
    

    app.post('/users', authController.isAuthenticated, function(req, resp) {
       
        var user = new User({
            username: req.body.username,
            password: req.body.password,           
            email: req.body.email, 
            role: req.body.role ,
            createDate: Date.now() 
        })
       
        user.save(function (err) {
            console.log(err);
          });
        resp.redirect('/users')
       
    });

    app.put('/users', authController.isAuthenticated, function(req, resp) {
        console.log(req.body.id);
        req.body.updateDate = Date.now();
        User.findByIdAndUpdate(req.body.id, req.body, (err, todo) => {
            // As always, handle any potential errors:
            if (err) return res.status(500).send(err);
            
        });
        resp.redirect('/users')
    });

    app.delete('/users/:id', authController.isAuthenticated, function(req, resp) {
       console.log(req.params.id);

        User.findByIdAndRemove(req.params.id, (err, todo) => {
            // As always, handle any potential errors:
            if (err) return res.status(500).send(err);
            
        });
        resp.redirect('/users')
    });
};
