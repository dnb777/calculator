"use strict"

const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const clear = document.querySelector('#clearBtn')
const numbers = document.querySelectorAll('#num');
const operators = document.querySelectorAll('#operator');

let value = '';
let op = '';

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
		return Number(Math.round(parseFloat((a / b) + 'e' + 2)) + 'e-' + 2);
	},
	"percentage" : function(a, b) {
		return (a * b) / 100;
	},
}


function operate(str) {
	const nums = str.split(op);

	const a = Number(nums[0]);
	const b = Number(nums[1]);


	if(op == '+') return operations.sum(a, b);
	if(op == '-') return operations.subtract(a, b);
	if(op == 'x') return operations.multiply(a, b);
	if(op == '/') return operations.divide(a, b);
	if(op == '%') return operations.percentage(a, b);
}


numbers.forEach(number => {
	number.addEventListener('click', (e) => {
		display.textContent += e.target.innerText;
		value += e.target.innerText;
	})
})
operators.forEach(operator => {
	operator.addEventListener('click', (e) => {
		op = e.target.innerText;
		display.textContent += op;
		value += e.target.innerText;
	})
})

equal.addEventListener('click', () => {
	display.textContent = operate(value);
})