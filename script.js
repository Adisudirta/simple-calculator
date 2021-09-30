let num1 = "";
let num2 = "";
let operation = "";
let result = 0;

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
    num1 = String(result);
    num2 = "";
    operation = "";
    displayOutput();
  }
}

function changeTheme(theme) {
  let icon = document.querySelector("#imageTheme");
  theme === "dark"
    ? (icon.innerHTML = `<img onclick="changeTheme('light')" src="./assets/moon.svg" />`)
    : (icon.innerHTML = `<img onclick="changeTheme('dark')" src="./assets/sun.svg" />`);

  document
    .querySelector("link[title=color]")
    .setAttribute("href", `./style/color/${theme}-theme-color.css`);
}
