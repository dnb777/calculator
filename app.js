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
	if(b === 0) return "AreUdum?";
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
}

function clearAll() {
	operation = '';
	previousNumber = ''
	currentNumber = '';
}

function equal() {
	if(currentNumber === '' || operation === '') return;
	currentNumber = operate(operation, previousNumber, currentNumber);
	previousNumber = '';
	operation = '';
}

function updateDisplay() {
	if(previousNumber !== '' && currentNumber === '') {
		display.textContent = previousNumber + operation;
	}else {
		display.textContent = currentNumber;
	}
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
	updateDisplay();
})

delBtn.addEventListener('click', () => {
	deleteLast();
	updateDisplay();
})

equalBtn.addEventListener('click', () => {
	equal();
	updateDisplay();
})