//function person(first, last, age, eye) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eye;
//}
//person.prototype.nationality = "English";
//
//var myFather = new person("John", "Doe", 50, "blue");
//document.getElementById("demo").innerHTML =
//"My father is " + myFather.nationality; 

function getUl(f) {
	var ul = document.createElement("ul");
	
	var li = document.createElement("li");
	li.appendChild( document.createTextNode("Name: "+f.name) );
	ul.appendChild(li);
	
	li = document.createElement("li");
	li.appendChild( document.createTextNode("Nationality: "+f.nationality) );
	ul.appendChild(li);
	
	return ul;
}

function foo(name) {
	this.name = name;
}

var div = document.getElementById("foolist");

var f1 = new foo("f1");
var ulf1 = getUl(f1);

div.appendChild(ulf1);

foo.prototype.nationality = "Italy";
var f2 = new foo("f2");
var ulf2 = getUl(f2);

div.appendChild(ulf2);

// Magic now
ulf1 = getUl(f1);
div.appendChild(ulf1);



