"use strict"


// function sum(a, b) {
// 	return a + b;
// }

// function subtract(a, b) {
// 	return a - b;
// }

// function multiply(a, b) {
// 	return a * b;
// }

// function divide(a, b) {
// 	return a / b;
// }
const operations = {
	"sum" : function(a, b) {
		return a + b;
	},
	"subtract" : function(a, b) {
		return a - b;
	},
	"multiply" : function(a, b) {
		return a * b;
	},
	"divide" : function(a, b) {
		return a / b;
	},
}


function operate(n, n1) {
	const op = prompt("enter operator", '')
	if(!op){
		console.log("ERROR: missing operator")
	}

	if(op == '+') return sum(n, n1);
	if(op == '-') return subtract(n, n1);
	if(op == '*') return multiply(n, n1);
	if(op == '/') return divide(n, n1);
}

