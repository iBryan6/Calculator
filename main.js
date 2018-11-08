let inputKey = document.getElementById('result');

function getHistory() {
    return document.getElementById("history").value;
}

function setHistory(num) {
    document.getElementById("history").value = num;
}

function getResult() {
    return document.getElementById("result").value;
}

function setResult(num) {
    document.getElementById("result").value = num;
}

//KEYPRESS
inputKey.addEventListener('keydown', (e) => {
    var output = getResult();
    var history = getHistory();
    if (e.keyCode >= 106 && e.keyCode <= 111 && e.keyCode != 110) {
        if (output != "" || history != "") {
            output = output + e.key;
            setHistory(output);
            setResult("");
        }
    }

    if (e.keyCode == 13) {
        history = parseInt(history);
        history = history + output;
        let result = eval(history);
        setResult(result);
        setHistory("");
    }
});

//Adding operators
const operator = document.getElementsByClassName("operator");
//For each element that has operator in the class
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //Clear Calculator
        if (this.id == "clearCal") {
            setHistory("");
            setResult("");
            document.getElementById("result").focus();
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
