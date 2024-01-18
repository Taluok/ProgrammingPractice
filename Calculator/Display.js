class Display {
    constructor(displayPreviousValue, displayActualValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.previousValue = '';
        this.actualValue = '';
        this.signs = { sum: '+', division: '%', multiplication: 'x', subtraction: '-' };
    }

    deleted() {
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    deletedAll() {
        this.actualValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.actualValue.includes('.')) return;
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const actualValue = parseFloat(this.actualValue);

        if (isNaN(actualValue) || isNaN(previousValue)) return;

        this.actualValue = this.calculator[this.operationType](previousValue, actualValue);
        this.printValues();
    }

    compute(type) {
        this.calculate();
        this.operationType = type;
        this.previousValue = this.actualValue || this.previousValue;
        this.actualValue = '';
    }
}

/*Este codigo define una clase llamada Display, el construcor toma dos parametros
displayPreviousValue y displayActualValue que muestran los valores anteriores y actuales
en la interfaz de usuario, ademas se inicializan varias propiedades como calculator, 
operationType, previousValue, actualValue, y signs.
En resumen, esta clase Display maneja la entrada del usuario en una interfaz de calculadora,
realiza cálculos a medida que se introducen números y operadores, y actualiza la interfaz de 
usuario para reflejar el estado actual de la calculadora. La lógica de cálculo está separada 
en una clase Calculator, que se instancia en el constructor.*/

