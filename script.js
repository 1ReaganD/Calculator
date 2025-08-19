// Adding function
function add(num1, num2) {
    return num1 + num2;
}

//Subtraction function
function subtract(num1, num2) {
    return num1 - num2;
}

//Multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}

//Division function
function divide(num1, num2) {
    let numWithDecimal = num1 / num2;
    numWithDecimal = numWithDecimal.toFixed(5)
    return numWithDecimal = parseFloat(numWithDecimal)
}


function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}

//Get values from html file

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const zidisha = document.querySelector("#multiply");
const gawanya = document.querySelector("#divide");
const clear = document.querySelector("#clear");
const display = document.querySelector(".display");
const button = document.querySelector(".button");
const equals = document.querySelector("#equals");
const allButtons = document.querySelectorAll("button");
const deleteNumber = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
// console.log(allButtons)
let values = [];
// const namba = document.querySelectorAll(".buttonSpecial");

//User input operation    

one.addEventListener("click", function () {
    calledWhenNoPressed(1);
});

two.addEventListener("click", function () {
    calledWhenNoPressed(2);
});

three.addEventListener("click", function () {
    calledWhenNoPressed(3)
});

four.addEventListener("click", function () {
    calledWhenNoPressed(4)
});

five.addEventListener("click", function () {
    calledWhenNoPressed(5)
});

six.addEventListener("click", function () {
    calledWhenNoPressed(6)
});

seven.addEventListener("click", function () {
    calledWhenNoPressed(7)
});

eight.addEventListener("click", function () {
    calledWhenNoPressed(8)
});

nine.addEventListener("click", function () {
    calledWhenNoPressed(9)
});

zero.addEventListener("click", function () {
    calledWhenNoPressed(0)
});
plus.addEventListener("click", function () {
    operation();
    calledWhenNoPressed("+");
});
minus.addEventListener("click", function () {
    operation();
    calledWhenNoPressed("-");
});
zidisha.addEventListener("click", function () {
    operation();
    calledWhenNoPressed("*")
});
gawanya.addEventListener("click", function () {
    operation();
    calledWhenNoPressed("/")
});
equals.addEventListener("click", function () {
    operation()
    values = clearDisplay(values);
});
deleteNumber.addEventListener("click", function () {
    let lastNumber;
    lastNumber = values.length - 1;
    values.pop(values[lastNumber]);
    display.textContent = values.join("")
});
decimal.addEventListener("click", function () {
    if (!values.includes(".")) {
        calledWhenNoPressed(".");
    } else if (values.includes("+") || values.includes("*") || values.includes("-") || values.includes("/")) {
        calledWhenNoPressed(".");
    }
})
clear.addEventListener("click", function () {
    display.textContent = "";
    values = clearDisplay(values);
})


let numbersInDisplay;
function calledWhenNoPressed(num) {
    values.push(num);
    numbersInDisplay = values.length - 1;
    // console.log(numbersInDisplay);
    if (numbersInDisplay <= 18) {
        display.textContent = values.join("");
    } else {
        display.textContent = "Error!"
        values = clearDisplay(values);
    }
    return values;
}

function clearDisplay(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array.pop(array[i]);
    }
    return array;
}


function operation() {
    let arrayOfDisplay = values.join("");
    if (arrayOfDisplay.includes("+")) {
        arrayOfDisplay = arrayOfDisplay.split("+");
        display.textContent = "";
        display.textContent = operate("+", Number(arrayOfDisplay[0]), Number(arrayOfDisplay[1]));
        values = clearDisplay(values)
        values.push(display.textContent);
    } else if (arrayOfDisplay.includes("-")) {
        arrayOfDisplay = arrayOfDisplay.split("-")
        display.textContent = "";
        display.textContent = operate("-", Number(arrayOfDisplay[0]), Number(arrayOfDisplay[1]));
        values = clearDisplay(values)
        values.push(display.textContent);
    } else if (arrayOfDisplay.includes("*")) {
        arrayOfDisplay = arrayOfDisplay.split("*")
        display.textContent = "";
        display.textContent = operate("*", Number(arrayOfDisplay[0]), Number(arrayOfDisplay[1]));
        values = clearDisplay(values)
        values.push(display.textContent);
    } else if (arrayOfDisplay.includes("/")) {
        arrayOfDisplay = arrayOfDisplay.split("/")
        display.textContent = "";
        display.textContent = operate("/", Number(arrayOfDisplay[0]), Number(arrayOfDisplay[1]));
        values = clearDisplay(values)
        values.push(display.textContent);
    }
}

//On using the physical keyboard
document.addEventListener("keydown", function (e) {
    // console.log("key pressed:", e.code)
    if (e.code === "Digit1") {
        calledWhenNoPressed("1")
    } else if (e.code === "Digit2") {
        calledWhenNoPressed("2")
    } else if (e.code === "Digit3") {
        calledWhenNoPressed("3")
    } else if (e.code === "Digit4") {
        calledWhenNoPressed("4")
    } else if (e.code === "Digit5") {
        calledWhenNoPressed("5")
    } else if (e.code === "Digit6") {
        calledWhenNoPressed("6")
    } else if (e.code === "Digit7") {
        calledWhenNoPressed("7")
    } else if (e.code === "Digit8") {
        calledWhenNoPressed("8")
    } else if (e.code === "Digit9") {
        calledWhenNoPressed("9")
    } else if (e.code === "Digit0") {
        calledWhenNoPressed("0")
    } else if (e.code === "NumpadAdd") {
        operation();
        calledWhenNoPressed("+")
    } else if (e.code === "Minus") {
        operation();
        calledWhenNoPressed("-")
    } else if (e.code === "Slash") {
        operation();
        calledWhenNoPressed("/")
    } else if (e.code === "Numpad8") {
        operation();
        calledWhenNoPressed("*")
    } else if (e.code === "Equal") {
        operation()
        values = clearDisplay(values);
    } else if (e.code === "Escape") {
        display.textContent = "";
        values = clearDisplay(values);
    } else if (e.code === "Delete") {
        let lastNumber;
        lastNumber = values.length - 1;
        values.pop(values[lastNumber]);
        display.textContent = values.join("")
    } else if (e.code === "Period") {
        if (!values.includes(".")) {
            calledWhenNoPressed(".");
        } else if (values.includes("+") || values.includes("*") || values.includes("-") || values.includes("/")) {
            calledWhenNoPressed(".");
        }
    }
})








