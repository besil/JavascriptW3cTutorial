$(document).ready( function() {
	var maindiv = $("#maindiv");

	maindiv.append('<h3 id="title">Hello from JQuery</h3>');

	maindiv.append('<button id="b">Hide</button>');

	$("#b").click(function(){
		$("#title").toggle();
	});

});