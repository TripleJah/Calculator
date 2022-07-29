
const current = document.getElementById("current");
const equals = document.getElementById("equals");

let object = {

}


//adds the selected number to the current display


let numInputs = document.getElementsByClassName("number-button");
    for(let i = 0; i < numInputs.length; i++){
        numInputs[i].addEventListener('click', (e) => {
            addNumber(e.target.textContent);
        })
    }

let operatorInputs = document.getElementsByClassName("button-operator");
    for(let i =0; i < operatorInputs.length; i++){
        operatorInputs[i].addEventListener('click', (e) => {
            addOperator(e.target.textContent);
        })
    }

equals.addEventListener('click', selectEquals);

function selectEquals(){
    operate(object.numOne, object.numTwo, object.operator);
}

operate(object.numOne, object.numTwo, object.operator)

function addOperator (e) {
    if(('product' in object) && ('operator' in object) && ('numTwo' in object)){
        operate(object.product, object.numTwo, object.operator);
        current.textContent = object.product + e;
        object["operator"] = e;
    } else if(('numOne' in object) && ('operator' in object) && ('numTwo' in object)){
        operate(object.numOne, object.numTwo, object.operator);
        current.textContent = object.product + e;
        object["operator"] = e;
    } else if (!('numOne' in object) && !('product' in object)){
        return false;
    } else {
        if('numOne' in object){
        object["operator"] = e;
        current.textContent = object.numOne + e;
        } else {
            current.textContent = object.product + e;
            object["operator"] = e;
        }
    }
    } 


function addNumber (e) {
    if(('product' in object) && !('operator' in object)){
        return false;
    }else if(!('operator' in object) && !('numOne' in object)){
        object["numOne"] = [e];
        current.textContent = object.numOne;
    }else if(!('operator' in object) && (object.numOne.length < 10)){
        object["numOne"] += [e];
        current.textContent = object.numOne; 
    }
    if(!('numTwo' in object) && ('operator' in object)){
        object["numTwo"] = [e];
        current.textContent = object.numTwo;
    } else if(('numTwo' in object) && (object.numTwo.length < 10)){
        object["numTwo"] += [e];
        current.textContent = object.numTwo;
    }
}

function operate(a, b, operator) {
    if (operator == '+') {
        return add(a, b)
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a, b)
    } else if (operator == '/' && a == 0 || b == 0) {
        current.textContent = "Nahhhhh";
    } else if (operator == '/') {
        return divide(a, b);
    }
}

function add(a, b) {
    let result = Number(a) + Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    
}

function subtract(a, b) {
    let result = Number(a) - Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
}

function multiply(a, b) {
    let result = Number(a) * Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    
}

function divide(a, b) {
    let result = Number(a) / Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    
}