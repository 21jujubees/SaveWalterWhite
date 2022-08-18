const visitorCounterElement = document.getElementById("visitorCounter");

let visitCounter = Math.floor((Math.random() * 1000000) + 1);

console.log(visitCounter);
var startCount = setInterval(function(){

	visitCounter += Math.floor((Math.random() * 10) + 1);
	visitorCounterElement.innerHTML = `${visitCounter}`;

}, 500);