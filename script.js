function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function multiply (a,b) {
	return a*b;
}

function divide(a,b){
    if(b == 0){
        return "Cannot divide by zero"
    }else{
        return a/b;
    }
}
function operate(operation, a, b){
    switch (operation){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}
let display = document.querySelector("#display");
let equals = document.querySelector("#buttonEquals");
let numButtons = Array.prototype.slice.call(document.querySelectorAll('.digitButtons button'));
let values = new Array();

numButtons.pop();

//Number buttons
numButtons.forEach(button =>{
    button.addEventListener('click',(e) =>{
        display.textContent = display.textContent + button.id;
        values[values.length] = parseInt(button.id, 10);
    });
});

