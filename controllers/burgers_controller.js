//var express = require('express');

//var router = express.Router();

var db = require('../models');

module.exports= function(app) {


app.get('/',function(req,res){

	db.burger.findAll({})
	.then(function(burgerObject) {
		console.log(burgerObject);
      res.json(burgerObject);
    });
		//res.render("index",burgerObject);
	});
	

// app.post('/api/burgers',function(req,res){
// 	//console.log("I posted via postman");
// 	//console.log(req.body);
// 	db.burger.create({
// 	});
// });

// router.put('/api/burgers/:id', function(req,res){
// 	var condition = "ID = " + req.params.id;
// 	console.log(condition);

// 	burger.update("burgers",'Devoured',req.body.Devoured,condition,function(data){
// 		console.log(req.body);
// 			res.json({id: data.insertId});
// 		console.log(data);
// 	})

// });


}

//module.exports = router;