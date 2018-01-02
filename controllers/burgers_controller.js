
 var db = require('../models');

module.exports= function(app) {



app.get("/",function(req,res){

	db.Burger.findAll()
	.then(function(burgerObject) {

      var burgers = {burgers:burgerObject};
      
      res.render("index",burgers);

    });
		
});
	

app.post('/api/burgers',function(req,res){
	
	db.Burger.create({
		burgername:req.body.burgername,
		devoured:req.body.devoured

	})
	.then(function(result){
		res.redirect('/');
})
})


app.put('/api/burgers/:id', function(req,res){
	

	db.Burger.update({
		devoured:req.body.devoured
	},
	{
		where:{
			id:req.params.id
		}
	})
	.then(function(result){
		res.json(result);
})

});


}

