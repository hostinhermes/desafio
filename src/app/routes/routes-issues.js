let Issue = require('../models/Issue')
let User = require('../models/User')
var issueTemplateList = require('../views/issues/list/list.marko')
const mongoose = require('mongoose');
const db = require('../../config/database');
var authController = require('../controllers/auth');

module.exports = (app) => {
    
    
    
    app.get('/issues', authController.isAuthenticated, function(req, resp) {
        
        if(mongoose.connection.readyState){
            

            Issue.find({}).then((issues) => {
               
                resp.marko(issueTemplateList, {issues: issues});
            })
            .catch(erro => console.log(erro));
        }else{        

            resp.marko(issueTemplateList);
        }
       
    });

    app.get('/issues/form', authController.isAuthenticated, function(req, resp) {
        
        User.find({}).then((users) => {
            
            resp.marko(require('../views/issues/form/form.marko'), { issue: {title:"", description:"", userReporter:"", userAssign:""},users:users });
        })
        .catch(erro => console.log(erro));
        
       
    });

    app.get('/issues/form/:id', authController.isAuthenticated, function(req, resp) {
        var users = null;
        User.find({}).then((usersList) => {
            users = usersList
            
        })
        .catch(erro => console.log(erro));
        
        Issue.findById(req.params.id).then((issue) => {
            
            resp.marko(
                require('../views/issues/form/form.marko'), 
                { issue: issue, users: users }
            )
        })
        .catch(erro => console.log(erro));

        
    });
    

    app.post('/issues', authController.isAuthenticated, function(req, resp) {
       
        var issue = new Issue({
            title: req.body.title, 
            description: req.body.description, 
            userReporter: req.body.userReporter ,
            userAssign: req.body.userAssign ,
            status : req.body.status,
            createDate: Date.now() 
        })

       
       
        issue.save(function (err) {
            console.log(err);
          });
        resp.redirect('/issues')
       
    });

    app.put('/issues', authController.isAuthenticated, function(req, resp) {
        console.log(req.body);
        req.body.updateDate = Date.now();
        
        Issue.findByIdAndUpdate(req.body.id, req.body, (err, todo) => {
            
            if (err) return res.status(500).send(err);
            
        });
        resp.redirect('/issues')
    });

    app.delete('/issues/:id', authController.isAuthenticated, function(req, resp) {
       console.log(req.params.id);

       Issue.findByIdAndRemove(req.params.id, (err, todo) => {
            // As always, handle any potential errors:
            if (err) return res.status(500).send(err);
            
        });
        resp.redirect('/issues')
    });
};
