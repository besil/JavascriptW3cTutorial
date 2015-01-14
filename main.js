function addPage(ref) {
	var li = document.createElement("li");
	var newLink = document.createElement("a");
	newLink.setAttribute("href",ref);
	newLink.innerHTML = ref;
	li.appendChild( newLink );
	return li;
}

// var ul = document.getElementById("pagelist").getElementsByTagName("ul")[0];
var pagelist = document.getElementById("pagelist");
var ul = document.createElement("ul");

var pages = [];

var prototype = addPage("prototype");
var jquery = addPage("jquery");

pages.push( prototype );
pages.push( jquery );

pages.forEach(function(page) {
	ul.appendChild( page );
	pagelist.appendChild(ul);
})


