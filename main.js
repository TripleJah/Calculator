
const current = document.getElementById('current');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');
const clr = document.getElementById('clear');
const del = document.getElementById('del');
const point = document.getElementById('point');


let object = {

}





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

zero.addEventListener('click', addZero);

function addZero(){
        if(('product' in object) && !('operator' in object)){
            return false;
        } else if(!('operator' in object) && !('numOne' in object)){
            object["numOne"] = [0];
            current.textContent = object.numOne;
        } else if(!('operator' in object)){
            if(!(object.numOne[0]==0) && (object.numOne.length < 10)){
                object["numOne"] += [0];
                current.textContent = object.numOne;
            }
        }
        if(!('numTwo' in object) && ('operator' in object)){
            object["numTwo"] = [0];
            current.textContent = object.numTwo;
        } else if('numTwo' in object){
            if(!(object.numTwo[0] == 0) && (object.numTwo.length < 10)){
                object["numTwo"] += [0];
                current.textContent = object.numTwo;
            }
        }
    }

point.addEventListener('click', addPoint);

function addPoint(){
    if(!('numOne' in object) && !('product' in object)){
        object["numOne"] = "0.";
        current.textContent = object.numOne;
    } else if (('numOne' in object) && (!('operator' in object))){
        if(!(object.numOne.includes('.'))){
            object["numOne"] += ["."];
            current.textContent = object.numOne;
        }
    } else if (('numOne' in object) && ('operator' in object) && (!('numTwo' in object))){
        object["numTwo"] = "0.";
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
        if(!(object.numTwo.includes('.'))){
            object["numTwo"] += ["."];
            current.textContent = object.numTwo;
        }
    } else if (('product' in object) && ('operator' in object) && (!('numTwo' in object))){
        object["numTwo"] = "0.";
        current.textContent = object.numTwo;
    }
}

del.addEventListener('click', deleteLast); 

function deleteLast(){
    if(('numOne' in object) && (!('operator' in object))){
        let newString = object.numOne.slice(0, -1);
        object.numOne = newString;
        current.textContent = object.numOne;
    } else if (('numOne' in object) && ('operator' in object) && (!('numTwo' in object))){
        delete object.operator;
        current.textContent = object.numOne;
    } else if (('operator' in object) && ('numTwo' in object)){
        let newString = object.numTwo.slice(0, -1);
        object.numTwo = newString;
        current.textContent = object.numTwo;
    }
}

equals.addEventListener('click', selectEquals);

function selectEquals(){
    if (!('numTwo' in object)) {
        return false;
    } else if (!('product' in object)){
        operate(object.numOne, object.numTwo, object.operator);
    } else {
        operate(object.product, object.numTwo, object.operator);
    }
}

clr.addEventListener('click', clear);

function clear(){
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    delete object.product;
    current.textContent = "";
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

//adds the selected number to the current display
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