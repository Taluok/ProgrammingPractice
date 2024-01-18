const displayPreviousValue = document.getElementById ('previousValue');
const displayActualValue = document.getElementById ('actualValue');
const numberButton = document.querySelectorAll ('.number');
const operatorButton = document.querySelectorAll ('.operator');

const display = new Display(displayPreviousValue, displayActualValue);

numberButton.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerText));
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});


