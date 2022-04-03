const numButton = document.querySelectorAll(".numButton");
const oprButton = document.querySelectorAll(".oprButton");
const cancelButton = document.querySelectorAll(".cancelButton");
const eqButton = document.querySelector(".eqButton");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");
const calculator = document.querySelector(".calculator")
let joinedResult1 = [];
let joinedResult2 = "";
let oprToUse;
let prevOpr;
let num1;
let num2;
let num3;

document.onkeyup = getKey;

function getKey(e) {
    if (e.keyCode == 96) {
        document.querySelector("#num0").click();
    } else if (e.keyCode == 97) {
        document.querySelector("#num1").click();
    } else if (e.keyCode == 98) {
        document.querySelector("#num2").click();
    } else if (e.keyCode == 99) {
        document.querySelector("#num3").click();
    } else if (e.keyCode == 100) {
        document.querySelector("#num4").click();
    } else if (e.keyCode == 101) {
        document.querySelector("#num5").click();
    } else if (e.keyCode == 102) {
        document.querySelector("#num6").click();
    } else if (e.keyCode == 103) {
        document.querySelector("#num7").click();
    } else if (e.keyCode == 104) {
        document.querySelector("#num8").click();
    } else if (e.keyCode == 105) {
        document.querySelector("#num9").click();
    } else if (e.keyCode == 110) {
        document.querySelector("#numDot").click();
    } else if (e.keyCode == 109) {
        document.querySelector("#opr1").click();
    } else if (e.keyCode == 107) {
        document.querySelector("#opr2").click();
    } else if (e.keyCode == 106) {
        document.querySelector("#opr3").click();
    } else if (e.keyCode == 111) {
        document.querySelector("#opr4").click();
    } else if (e.keyCode == 13) {
        document.querySelector("#eq").click();
    } else if (e.keyCode == 8) {
        document.querySelector("#c1").click();
    } else if (e.keyCode == 46) {
        document.querySelector("#c2").click();
    }
}

numButton.forEach((evt) => {
    evt.addEventListener("click", getVal, false);
});


function getVal(event) {
    joinedResult1.push(event.target.value);
    result.value = joinedResult1.join("");

};

oprButton.forEach((evt) => {
    evt.addEventListener("click", calculate, false);
});


function calculate(event) {
    let ops = event.target.value;
    joinedResult1 = [];
    oprToUse = ops;
    if (ops == "-") {
        if (!num1 && !num2) {
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (prevOpr != ops) {
            if (prevOpr == "+") {
                num2 = Number(result.value);
                result.value = num1 + num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "x") {
                num2 = Number(result.value);
                result.value = num1 * num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "÷") {
                num2 = Number(result.value);
                result.value = num1 / num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            }
        } else if (result.value == "") {
            num2 = num1;
            result.value = num1 - num2;
            num1 = "";
            num2 = "";
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (result.value != "") {
            num2 = Number(result.value);
            result.value = num1 - num2;
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        }
    };
    if (ops == "+") {
        if (!num1 && !num2) {
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (prevOpr != ops) {
            if (prevOpr == "-") {
                num2 = Number(result.value);
                result.value = num1 - num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "x") {
                num2 = Number(result.value);
                result.value = num1 * num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "÷") {
                num2 = Number(result.value);
                result.value = num1 / num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            }
        } else if (result.value == "") {
            num2 = num1;
            result.value = num1 + num2;
            num1 = "";
            num2 = "";
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (result.value != "") {
            num2 = Number(result.value);
            result.value = num1 + num2;
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        }
    };
    if (ops == "x") {
        if (!num1 && !num2) {
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (prevOpr != ops) {
            if (prevOpr == "+") {
                num2 = Number(result.value);
                result.value = num1 + num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "-") {
                num2 = Number(result.value);
                result.value = num1 - num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "÷") {
                num2 = Number(result.value);
                result.value = num1 / num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            }
        } else if (result.value == "") {
            num2 = num1;
            result.value = num1 * num2;
            num1 = "";
            num2 = "";
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (result.value != "") {
            num2 = Number(result.value);
            result.value = num1 * num2;
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        }
    };
    if (ops == "÷") {
        if (!num1 && !num2) {
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (prevOpr != ops) {
            if (prevOpr == "+") {
                num2 = Number(result.value);
                result.value = num1 + num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "-") {
                num2 = Number(result.value);
                result.value = num1 - num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            } else if (prevOpr == "x") {
                num2 = Number(result.value);
                result.value = num1 * num2;
                num1 = Number(result.value);
                prevOpr = ops;
                joinedResult2 = num1 + " " + prevOpr;
                result2.innerHTML = joinedResult2;
            }
            
        } else if (result.value == "") {
            num2 = num1;
            result.value = num1 / num2;
            num1 = "";
            num2 = "";
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        } else if (result.value != "") {
            num2 = Number(result.value);
            result.value = num1 / num2;
            num1 = Number(result.value);
            prevOpr = ops;
            joinedResult2 = num1 + " " + prevOpr;
            result2.innerHTML = joinedResult2;
        }
    };

    
    
};

eqButton.addEventListener("click", function() {
    if (oprToUse == "-") {
        num2 = Number(result.value);
        result.value = num1 - num2;
        joinedResult2 = num1 + " " + oprToUse + " " + num2 + " =";
        result2.innerHTML = joinedResult2;
        num1 = "";
        num2 = "";
        joinedResult1 = [];
    };
    if (oprToUse == "+") {
        num2 = Number(result.value);
        result.value = num1 + num2;
        joinedResult2 = num1 + " " + oprToUse + " " + num2 + " =";
        result2.innerHTML = joinedResult2;
        num1 = "";
        num2 = "";
        joinedResult1 = [];
    };
    if (oprToUse == "x") {
        num2 = Number(result.value);
        result.value = num1 * num2;
        joinedResult2 = num1 + " " + oprToUse + " " + num2 + " =";
        result2.innerHTML = joinedResult2;
        num1 = "";
        num2 = "";
        joinedResult1 = [];
    };
    if (oprToUse == "÷") {
        num2 = Number(result.value);
        result.value = num1 / num2;
        joinedResult2 = num1 + " " + oprToUse + " " + num2 + " =";
        result2.innerHTML = joinedResult2;
        num1 = "";
        num2 = "";
        joinedResult1 = [];
    };
})

cancelButton.forEach((evt) => {
    evt.addEventListener("click", cancelClear, false);
});

function cancelClear(event) {    
    let cce = event.target.value;
    if (cce == "cancel") {
        joinedResult1.pop();
        result.value = joinedResult1.join("");
    } else if (cce == "clear"){
        joinedResult1 = [];
        joinedResult2 = "0";
        result.value = joinedResult1;
        result2.innerHTML = joinedResult2;
        num1 = "";
        num2 = "";
    }
};