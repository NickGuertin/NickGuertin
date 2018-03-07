var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var n = 2;
var outputTarget = document.querySelector("#exercise-2");
var outputHtml = "<ul>";

while (n <= 20) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n += 2;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var n = 100;
var i = 1;
var sum = 0;
var outputTarget = document.querySelector("#exercise-3")
var outputHtml = "<ul>";

while (i < n) {
    sum += i;
    console.log(sum);
    outputHtml += "<li>" + sum + "</li>";
    i++;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var n = 15;
var outputTarget = document.querySelector("#exercise-5");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if (n % 2 === 1) {
        outputHtml += "<li>" + n +" odd</li>";
    } else {
        outputHtml += "<li>" + n +" even</li>";
    }
    n--;
};
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var outputTarget = document.querySelector("#exercise-6");
var outputHtml = "<ul>"
var buzz = "buzz"
var fizz = "fizz"
var buzzfizz = "buzzfizz"
for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        outputHtml += "<li>" + buzzfizz +" </li>"
    } else if (i % 3 == 0) {
        console.log("Fizz");
        outputHtml += "<li>" + fizz +" </li>"
    } else if (i % 5 == 0) {
        console.log("Buzz");
        outputHtml += "<li>" + buzz +" </li>"
    } else {
        console.log(i);
    outputHtml += "<li>" + i +" </li>"; }
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;
