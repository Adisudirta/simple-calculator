let num1 = "";
let num2 = "";
let operation = "";
let result = 0;
let history = []

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"))

const inputDisplay = document.getElementById("inputDisplay");

function displayOutput() {
  inputDisplay.value = `${num1} ${operation} ${num2}`;
}

function inputNumber(input) {
  if (operation === "") {
    if (input === ".") {
      // Jika num1 tidak kosong dan tidak memiliki titik,
      // baru titik-nya ditambahkan
      if (num1 !== "" && !num1.includes(".")) {
        num1 += String(input);
      }
    } else {
      num1 === "" ? (num1 = String(input)) : (num1 += String(input));
    }
    displayOutput();
  } else {
    if (input === ".") {
      if (num2 !== "" && !num2.includes(".")) {
        num2 += String(input);
      }
    } else {
      num2 === "" ? (num2 = String(input)) : (num2 += String(input));
    }
    displayOutput();
  }
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operation = "";
  result = 0;
  displayOutput();
}

function deleteInput() {
  if (num2 !== "") {
    num2 = num2.substring(0, num2.length - 1);
  } else if (operation !== "") {
    operation = "";
  } else if (num1 !== "") {
    num1 = num1.substring(0, num1.length - 1);
  }
  displayOutput();
}

function inputOperation(action) {
  if (action === "=") {
    calculate();
  } else if (action === "c") {
    operation = action;
    clearDisplay();
  } else if (action === "d") {
    deleteInput();
  } else if (num1 !== "") {
    operation = action;
    displayOutput();
  }
}

function addHistory(text){
    if(localStorage.getItem('history') == undefined){
        history.push(text)
        localStorage.setItem('history', JSON.stringify(history))
    } else {
        history = JSON.parse(localStorage.getItem('history'))
        history.push(text);
        localStorage.setItem('history', JSON.stringify(history));
    }
}

const historyDisplay = document.getElementById("historyDisplay");
function readHistory(){
    if(localStorage.getItem('history') != undefined){
        history = JSON.parse(localStorage.getItem('history'));
        historyDisplay.innerHTML = ``;
        history.forEach(item => {
            historyDisplay.innerHTML += `<p style="font-family: gs-medium;">${item}</p>`
        });
    }
}

function calculate() {
  if (num1 !== "" && num2 !== "" && operation !== "") {
    if (operation === "+") {
      result = Number(num1) + Number(num2);
    } else if (operation === "-") {
      result = Number(num1) - Number(num2);
    } else if (operation === "x") {
      result = Number(num1) * Number(num2);
    } else if (operation === "/") {
      result = Number(num1) / Number(num2);
    }
    text = num1+" "+operation+" "+num2+" = "+String(result);
    addHistory(text);
    num1 = String(result);
    num2 = "";
    operation = "";
    readHistory();
    displayOutput();
  }
}
readHistory();