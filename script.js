let num1 = ""
let num2 = ""
let operation = ""
let result = 0
let history = []

const inputDisplay = document.getElementById("inputDisplay")

function displayOutput(){
    inputDisplay.value = `${num1} ${operation} ${num2}`
}

function inputNumber(input){
    if(operation === ""){
        if(input === "."){
            if(num1 !== "" && !num1.includes(".")){
                num1 += String(input)
            } 
        } else {
            num1 === "" ? (num1 = String(input)) : (num1 += String(input))
        }
        displayOutput()
    } else {
        if(input === "."){
            if(num2 !== "" && !num2.includes(".")){
                num2 += String(input)
            } 
        } else {
            num2 === "" ? (num2 = String(input)) : (num2 += String(input))
        }
        displayOutput()
    }
}

function inputOperation(action){
    if(action === "="){
        calculate()
    } else if (action === "c") {
        clearDisplay()
    } else if (action === "del") {
        deleteInput()
    }else if (num1 !== ""){
        operation = action
        displayOutput()
    }
}

function calculate(){
    if(num1 !== "" && num2 !== "" && operation !== ""){
        if(operation === "+"){
            result = Number(num1) + Number(num2)
        } else if (operation === "-"){
            result = Number(num1) - Number(num2)
        } else if (operation === "x"){
            result = Number(num1) * Number(num2)
        } else if (operation === "/"){
            result = Number(num1) / Number(num2)
        }

        let text = num1+" "+operation+" "+num2+" = "+String(result)
        addHistory(text)

        num1 = String(result)
        num2 = ""
        operation = ""

        readHistory()
        displayOutput()
    }
}

function clearDisplay(){
    num1 = ""
    num2 = ""
    result = 0
    operation = ""
    displayOutput()
}

function deleteInput(){
    if(num2 !== ""){
        num2 = num2.substring(0, num2.length - 1)
    } else if(operation !== ""){
        operation = ""
    } else if(num1 !== ""){
        num1 = num1.substring(0, num1.length - 1)
    }
    displayOutput()
}

function addHistory(result){
    if(localStorage.getItem('history') !== null){
        history = JSON.parse(localStorage.getItem('history'))
    } 
    history.push(result)
    localStorage.setItem('history', JSON.stringify(history))
}

function readHistory(){
    const historyDisplay = document.getElementById('historyDisplay')
    if(localStorage.getItem('history') !== null){
        history = JSON.parse(localStorage.getItem('history'))
        historyDisplay.innerHTML = ``
        history.forEach(item => {
            historyDisplay.innerHTML += `<p>${item}</p>`
        });
    }
}
readHistory()
