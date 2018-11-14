/*
BUGS: TODOS SON CON EL TECLADO
1. Apretar enter al resultado varias veces
2. Operador se queda en el input
3. Validacion de no poner un operadotr al inciar
*/


let inputKey = document.getElementById('result');

var getHistory = () => document.getElementById("history").value;
var setHistory = num => document.getElementById("history").value = num;
var getResult = () => document.getElementById("result").value;
var setResult = num => document.getElementById("result").value = num;

var clear = params => {
    setHistory("");
    setResult("");
    document.getElementById("result").focus();
};

//KEYPRESS
inputKey.addEventListener('keydown', (e) => {
    var result = getResult();
    var history = getHistory();

    //check if esc was hit
    if (e.keyCode == 27) {
        clear();
    } else {
        //if result is empty it stays empty otherwise change it to int
        if (result != "" || history != "") {
            if (result == "") {
                result = "";
            } else {
                parseInt(result);
            }

            //check if hit operators
            if (e.keyCode >= 106 && e.keyCode <= 111 && e.keyCode != 110) {
                if (result != "" && history != "") {
                    history = history.substr(0, history.length - 1);
                    history = history + e.key;
                    setHistory(history);
                    setResult("");
                } else {
                    result = result + e.key;
                    setHistory(result);
                    setResult("");
                }
            };

            //check if you hit enter on keyboard
            if (e.keyCode == 13) {
                history = parseInt(history);
                history = history + result;
                result = eval(history);
                setResult(parseInt(result));
                setHistory("");
            };
        };
    };
});

//CLICKS
//Adding operators
const operator = document.getElementsByClassName("operator");
//For each element that has operator in the class
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //Clear Calculator
        if (this.id == "clearCal") {
            clear();
        } else {
            var result = getResult();
            var history = getHistory();

            //change the last char using substr when changing operator
            if (result == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                    document.getElementById("result").focus();
                }
            }

            //If fields are not empty
            if (result != "" || history != "") {
                //conditional (ternary) operator (if shortcut / if result is empty it stays empty otherwise change it to int
                result = result == "" ?
                    result : parseInt(result);
                history = history + result;

                //evaluate result when clicked on = with eval()
                if (this.value == "=") {
                    let result = eval(history);
                    setResult(result);
                    setHistory("");
                    document.getElementById("result").focus();
                }

                //concat to history
                else {
                    history = history + this.value;
                    setHistory(history);
                    setResult("");
                    document.getElementById("result").focus();
                }
            }
        }
    });
};

//Adding numbers
const number = document.getElementsByClassName("number");
//For each element that has number in the class
for (var i = 0; i < number.length; i++) {
    //when I click this element it listens
    number[i].addEventListener('click', function () {
        //concat number clicks
        var output = getResult();
        output = output + this.value;
        setResult(output);
        document.getElementById("result").focus();
    });
};
