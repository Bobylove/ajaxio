$(document).ready(function(){
	"use strict"
	
	$('#getPass').click(function(){
		console.log("Go recupe le tableau modafucka");
		$.get('http://192.168.1.21:3000/places', function(data){
			console.log(data.places[0]);
			$('#troll').text(data.places[5].password);

		});
		
	});

});