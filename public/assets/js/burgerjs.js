$(function(){
	$("body").on("click","#submit",function(event){

		//event.preventDefault();



		var newBurger = {
			burgername : $("#burger").val(),
			devoured : 0

		};
		console.log(newBurger);

		$.ajax("/api/burgers", {

			type:"POST",
			data: newBurger

		}).then(
			function(){

				location.reload();
			});
	});

	$("body").on("click","#devourit",function(event){

		//event.preventDefault();
		var id = $(this).data("id");

		console.log(id);
		var newDevourState = {
			devoured : true

		};
		console.log(newDevourState);

		$.ajax("/api/burgers/" + id, {

			type:"PUT",
			data: newDevourState

		}).then(
			function(){

				
				location.reload();
			});
	});
});