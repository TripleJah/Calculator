// basic calculator functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, action) {
    return action(a, b);
}

// functions to populate screen and store number


// Button and screen events

const screenDisplay = document.querySelector('.display');
const numericButtons = document.querySelectorAll('button[id]');
const operatorButtons = document.querySelectorAll('')
const firstInput = [];
const secondInput = [];

numericButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        inputNumber(this.id);
    });
});

const inputNumber = number => {
    const screenNumber = screenDisplay.innerHTML;
    if (screenNumber.length < 16) {
        screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
    }
}


function getOperatorSelection() {

}





// oneButton.addEventListener('click', () => {
//     alert("One!");
//     //should then display the number above the buttons
//     //should also call function to cmbine next to other 
//     //numbers in the display to make a whole number, i.e.
//     // pressin 1, 5, then 0 should store 150.
// });