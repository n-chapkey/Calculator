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
        return Number.parseFloat((Number.parseFloat(a)/Number.parseFloat(b)).toFixed(10));
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
function removeElements(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 2);
    }
}

let display = document.querySelector("#display");
let equals = document.querySelector("#buttonEquals");
let clear = document.querySelector("#clearButton");
let numButtons = Array.prototype.slice.call(document.querySelectorAll('.digitButtons button'));
let opButtons = Array.prototype.slice.call(document.querySelectorAll('.operateButtons button'));
let values = new Array();
let canOperate = false;
let canDigit = true;

numButtons.pop();

//Number buttons
numButtons.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(canDigit){
            display.textContent = display.textContent + button.id;

            if(!canOperate){
                values[values.length] = parseInt(button.id, 10);
                canOperate = true;
            }else{
                values[values.length-1] = parseInt(values[values.length-1] + button.id,10);
            }
        }else{
            alert("Error, please clear the console.");
        }
    });
});

//Operation buttons
opButtons.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(canOperate == true && canDigit){
            display.textContent = display.textContent + button.id;
            values[values.length] = button.id;
            canOperate = false;
        }else{
            alert("Cannot do that");
        }
    });
});

equals.addEventListener('click',(e)=>{
    if(canOperate){
        canDigit == false;

        while(values.indexOf("*") > -1){
            let value1 = values[values.indexOf("*")-1];
            console.log("value 1 is " + value1);

            let value2 = values[values.indexOf("*")+1];
            let value2Ind = values.indexOf("*")+1;
            console.log("value 2 is " + value2);

            values[values.indexOf("*")-1] = operate("*", value1,value2);
            console.log(values);
            removeElements(values,"*");
        }

        while(values.indexOf("/") > -1){
            let value1 = values[values.indexOf("/")-1];
            console.log("value 1 is " + value1);

            let value2 = values[values.indexOf("/")+1];
            console.log("value 2 is " + value2);

            values[values.indexOf("/")-1] = operate("/", value1,value2);
            console.log(values);
            removeElements(values,"/");
        }

        while(values.indexOf("+") > -1){
            let value1 = values[values.indexOf("+")-1];
            console.log("value 1 is " + value1);

            let value2 = values[values.indexOf("+")+1];
            console.log("value 2 is " + value2);

            values[values.indexOf("+")-1] = operate("+", value1,value2);
            console.log(values);
            removeElements(values,"+");
        }

        while(values.indexOf("-") > -1){
            let value1 = values[values.indexOf("-")-1];
            console.log("value 1 is " + value1);

            let value2 = values[values.indexOf("-")+1];
            console.log("value 2 is " + value2);

            values[values.indexOf("-")-1] = operate("-", value1,value2);
            console.log(values);
            removeElements(values,"-");
        }

        display.textContent = values[0];

    }else{
        alert("Error, cannot do that");
    }
});

clear.addEventListener('click',(e)=>{
    display.textContent = "";
    values = [];
    canDigit = true;
    canOperate = false;
})
