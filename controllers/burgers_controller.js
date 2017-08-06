var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var db = require("../models");
var burgers = require('../models')['burgers'];
var index = require('../models')['index'];
//root route/ 
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//route for creating object w/ burgers data for handlebars
router.get('/burgers', function(req, res) {
    db.burgers.findAll({}).then(function(burgers) {
            hbsObject = { "burgers": burgers };
            res.render('index', hbsObject);
        })       
});

//post burger route, devoured set tp false to avoid bugs
router.post('/burgers/create', function(req, res) {
    db.burgers.create({
        name: req.body.burger_name,
        devoured: false
    }).then(function() {
        res.redirect("/");
    })
});

//route for put, which shows devoured as true
router.put('/burgers/devour/:id', function(req, res) {
    db.burgers.findById(req.params.id).then(function(data) {
        data.update({
            devoured: true
        }).then(function() {
            res.redirect("/");
        })
    })
});


module.exports = router;