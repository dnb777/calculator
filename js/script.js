const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector("#clear");
const numbers = ['0','2','1','2','3','4','5','6','7','8','9','.'];
const operators = ['+','-','x','%'];

let currentValue = [];
let previousValue = [];
let operator = "";
let result = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        calculate(value);
    })
})

document.addEventListener("keypress", (e) => {
    const valueKey = e.key;
    calculate(valueKey);
})

function calculate(value){
    if (value == "C") clearAll();
        
    if (numbers.includes(value)){
        currentValue.push(value);
        display.textContent = previousValue.join("") + operator + currentValue.join("");
    }else if (operators.includes(value)){
        previousValue = Array.from(currentValue);
        currentValue.splice(0);
        operator = value;
        display.textContent = previousValue.join("") + operator + currentValue.join("");
    }else if (value == "=" || value == "Enter"){
        result = operate(previousValue, currentValue, operator);
        refreshDisplay(result);
        currentValue.splice(0, currentValue.length, result);
    }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(n1, n2, op){
    let num1 = parseFloat(n1.join(""));
    let num2 = parseFloat(n2.join(""));

    switch(op){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "%":
            return divide(num1, num2);
            break;
    }
}

function refreshDisplay(text){
    display.textContent = text;
}

function clearAll(){
    currentValue.splice(0);
    previousValue.splice(0);
    operator = "";
    result = "";
    refreshDisplay();
}