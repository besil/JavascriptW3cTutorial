function addPage(name, ref) {
	var li = document.createElement("li");
	var newLink = document.createElement("a");
	newLink.setAttribute("href",ref);
	newLink.innerHTML = name;
	li.appendChild( newLink );
	return li;
}

// var ul = document.getElementById("pagelist").getElementsByTagName("ul")[0];
var pagelist = document.getElementById("pagelist");
var ul = document.createElement("ul");

var prototype = addPage("prototype", "prototype");
ul.appendChild( prototype );

pagelist.appendChild(ul);