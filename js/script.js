const display = document.querySelector(".display");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(n1, n2, op){
    console.log(op);
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