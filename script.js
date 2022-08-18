const visitorCounterElement = document.getElementById("visitorCounter");

let visitCounter = 0;
let storageCounter = localStorage.getItem("visitCounter");

console.log(visitCounter);
var startCount = setInterval(function(){

	visitCounter += Math.floor((Math.random() * 10) + 1);
	localStorage.setItem("visitCounter", visitCounter);
	visitorCounterElement.innerHTML = `${visitCounter}`;

}, 500);