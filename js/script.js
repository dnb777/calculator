const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const numbers = ['0','2','1','2','3','4','5','6','7','8','9','.'];
const operators = ['+','-','x','%'];

let currentValue = "";
let previousValue = "";
let operator = "";
let result = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        
        if (!currentValue && numbers.includes(value)){
            currentValue = parseFloat(value);
            refreshDisplay(previousValue + operator + currentValue );
        }else if (operators.includes(value)){
            previousValue = currentValue;
            currentValue = "";
            operator = value;
            refreshDisplay(previousValue + operator + currentValue)
        }else if (value == "="){
            result = operate(previousValue, currentValue, operator);
            refreshDisplay(result);
            currentValue = result;
        }
    })
})

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(n1, n2, op){
    switch(op){
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "x":
            return multiply(n1, n2);
            break;
        case "%":
            return divide(n1, n2);
            break;
    }
}

function refreshDisplay(text){
    display.textContent = text;
}