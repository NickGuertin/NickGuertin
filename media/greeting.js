var name = prompt("Hi there! What's your name?");
var checkName = function() {
if(name === "") {//checks for an empty string
name = prompt('What is your name, for real this time?');

checkName(); //repeats until a name exists
}
}
checkName(); // kicks off the name-checking the first time
alert('hello ' + name);
