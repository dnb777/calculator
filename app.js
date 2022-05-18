"use strict"

let previousNumber = '';
let currentNumber = '';
let operation = '';


const display = document.querySelector("#display");
const numbersBtn = document.querySelectorAll("[data-number]");
const operatorsBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("#equal");
const delBtn = document.querySelector("#del");
const clearBtn = document.querySelector("#clear");


// Math operations
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
	a = Number(a);
	b = Number(b);

	if(op === "+") return currentNumber = sum(a,b);
	if(op === "-") return currentNumber = rest(a,b);
	if(op === "x") return currentNumber = multiply(a,b);
	if(op === "/") return currentNumber = divide(a,b);
	if(op === "%") return currentNumber = percentage(a,b);
}

function updateDisplay() {
	display.textContent = currentNumber;
}

// updates the currentNumber variable
function addNumber(number) {
	if(number === '.' && currentNumber.includes('.')) return;
	currentNumber += number;
}
// updates the operation variable and reset the currentNumber, if previousNumber is defined calls operate()
function chooseOperation(op) {
	if(currentNumber === '') return;
	if(previousNumber !== '') {
		operate(operation, previousNumber, currentNumber);
	}
	operation = op;
	previousNumber = currentNumber;
	currentNumber = '';
}

function deleteLast() {
	currentNumber = currentNumber.slice(0, -1);
	updateDisplay();
}

function clearAll() {
	operation = ''
	currentNumber = ''
	updateDisplay()
}

function equal() {
	currentNumber = operate(operation, previousNumber, currentNumber);
	updateDisplay();
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

clearBtn.addEventListener('click', () => {
	clearAll();
})

delBtn.addEventListener('click', () => {
	deleteLast();
})

equalBtn.addEventListener('click', () => {
	equal();
})