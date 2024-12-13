const calculator = {
    operands: ['0','2','1','2','3','4','5','6','7','8','9','.'],
    operators: ['+','-','*','/'],
    operations: {
        add(a, b) {return a + b},
        subtract(a, b) {return a - b},
        multiply(a, b) {return a * b},
        divide(a, b) {return a / b},
    },
    clearAll() {
        display.textContent = "";
        currentValue = "";
        previousValue = "";
        operator = "";
        result = "";
    },
    operate(value1, value2, op) {
        if (!value2 || !op) return value1;

        let num1 = parseFloat(value1);
        let num2 = parseFloat(value2);
        let result;

        switch(op){
            case "+":
                result = this.operations.add(num1, num2);
                return  result % 1 !== 0 ? result.toFixed(2) : `${result}`;
            case "-":
                result = this.operations.subtract(num1, num2);
                return  result % 1 !== 0 ? result.toFixed(2) : `${result}`;
            case "*":
                result = this.operations.multiply(num1, num2);
                return  result % 1 !== 0 ? result.toFixed(2) : `${result}`;
            case "/":
                result = this.operations.divide(num1, num2);
                return  result % 1 !== 0 ? result.toFixed(2) : `${result}`;
        }
    },
    populateDisplay(text) {
        return display.textContent = text;
    },
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

let currentValue = "";
let previousValue = "";
let operator = "";
let result = "";


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        calculate(value);
    })
})

document.addEventListener("keydown", (e) => {
    const value = e.key;
    calculate(value);
})

function calculate(value){
    if (value == "AC" || value == "Delete") calculator.clearAll();
    if (value == "del" || value == "Backspace") currentValue = currentValue.slice(0, -1);
    
    if (value == "=" || value == "Enter"){
        if (operator == "/" && currentValue == "0"){
            calculator.clearAll();
            return calculator.populateDisplay("404: Math not found");
        }
        result = calculator.operate(previousValue, currentValue, operator);
        currentValue = result;
        previousValue = "";
        operator = "";
        calculator.populateDisplay(result);
    }else if(
        operator != "" && 
        previousValue != "" && 
        calculator.operators.includes(value)) {
            result = calculator.operate(previousValue, currentValue, operator);
            currentValue = result;
            previousValue = "";
    }else if (calculator.operands.includes(value)){
        if (value == "." && currentValue.includes(value)) return;
        currentValue += value;
    }else if (calculator.operators.includes(value)){
        operator = value;
        previousValue = currentValue;
        currentValue = "";
    }
    calculator.populateDisplay(`${previousValue}${operator}${currentValue}`);
}