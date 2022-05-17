"use strict"

let previousNumber = '';
let currentNumber = '';
let operation = '';


const display = document.querySelector("#display");
const numbersBtn = document.querySelectorAll("[data-number]");
const operatorsBtn = document.querySelectorAll("[data-operator]");
const equal = document.querySelector("#equal");
const del = document.querySelector("#del");
const clear = document.querySelector("#clear");


function sum(a, b) {
	return a + b;
}

function rest(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return Number(Math.round(parseFloat((a / b) + 'e' + 2)) + 'e-' + 2);
}

function percentage(a, b) {
	return (a * b) / 100;
}


function operate(op, a, b) {

	if(op === "+") return sum(a,b);
	if(op === "-") return rest(a,b);
	if(op === "*") return multiply(a,b);
	if(op === "/") return divide(a,b);
	if(op === "%") return percentage(a,b);
}

function updateDisplay() {
	display.textContent = currentNumber;
}

function addNumber(number) {
	if(number === '.' && currentNumber.includes('.')) return;
	currentNumber += number;
}

function chooseOperation(op) {
	if(currentNumber === '') return;
	if(previousNumber !== '') {
		compute();
	}

	operation = op;
	previousNumber = currentNumber;
	currentNumber = '';
}





numbersBtn.forEach(button => {
	button.addEventListener('click', () => {
		addNumber(button.textContent);
		updateDisplay();
	})
})

operatorsBtn.forEach(button => {
	button.addEventListener('click', () => {
		chooseOperation(button.textContent);
		updateDisplay();
	})
})