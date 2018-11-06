function getHistory() {
    return document.getElementById("history").innerText;
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
    operator[i].addEventListener('click', function () {})
};

const number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = getResult();
        output = output + this.value;
        setResult(output);
    })
};
