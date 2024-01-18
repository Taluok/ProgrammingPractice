class Display {
    constructor(displayPreviousValue, displayActualValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.operationType = undefined; // Guarda el tipo de operación del usuario
        this.previousValue = '';
        this.actualValue = '';
        this.signs = { sum: '+', division: '%', multiplication: 'x', substraction: '-' };
    }

    deleted() { //se encarga de eliminar el ultimo caracter de actualValue
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    deletedAll() { // restablece actualValue, previousValue, y operationType a sus valores iniciales (vacíos o indefinidos).
        this.actualValue = '';
        this.previousValue = '';
        this.operationType = undefined; 
        this.printValues();
    }

    //lo utilize para agregar un número (o un punto decimal) a actualValue, siempre y cuando no haya otro punto decimal presente.
    addNumber(number) {
        if (number === '.' && this.actualValue.includes('.')) return;
        this.actualValue.push(number.toString());
        this.printValues();
    }
    //Después de actualizar actualValue, se llama a printValues para reflejar los cambios en la interfaz de usuario.
    // actualiza los elementos DOM (displayPreviousValue y displayActualValue) con los valores actuales de previousValue, operationType, y actualValue.
    printValues() {
        this.displayActualValue.textContent = this.actualValue.join('');
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue); //convierte previousValue a numeros parseFloat
        const actualValue = parseFloat(this.actualValue);

        if (isNaN(actualValue) || isNaN(previousValue)) return;
        
        this.actualValue = this.calculator[this.operationType](previousValue, actualValue); //
        this.printValues();
    }

    compute(type) { //realiza la operacion actual
        this.calculate();
        this.operationType = type;
        this.previousValue = this.actualValue || this.previousValue; 
        this.actualValue = ''; //inicializa una cadena vacia para comenzar la siguiente entrada de usuario
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

