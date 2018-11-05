$(document).ready(function () {
    'use strict';

    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    };

    function inputDigit(digit) {
        const {
            displayValue
        } = calculator;
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    };

    function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
        console.log(calculator);
    };


    function updateDisplay() {
        const display = document.querySelector('#result');
        display.value = calculator.displayValue;
    };

    const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', (event) => {
        const {
            target
        } = event;
        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            console.log('operator', target.textContent);
            return;
        }

        if (target.classList.contains('clearCal')) {
            resetCalculator();
            updateDisplay();
            return;
        }

        inputDigit(target.textContent);
        updateDisplay();
    });
});
