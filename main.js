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

const operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //Clear Calculator
        if (this.id == "clearCal") {
            setHistory("");
            setResult("");
        } else {
            var result = getResult();
            var history = getHistory();

            //change the last char using substr when changing operator
            if (result == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (result != "" || history != "") {
                //condition?true:false
                result = result == "" ?
                    result : parseInt(result);

                history = history + result;
                //evaluate result when clicked on = with eval()
                if (this.value == "=") {
                    let result = eval(history);
                    setResult(result);
                    setHistory("");
                }
                //concat Result to history
                else {
                    history = history + this.value;
                    setHistory(history);
                    setResult("");
                }
            }
        }
    })
};

const number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = getResult();
        output = output + this.value;
        setResult(output);
    })
};
