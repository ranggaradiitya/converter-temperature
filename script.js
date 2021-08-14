let input = document.getElementById("input");
let output = document.getElementById("output");
let tempInput = document.getElementById("temperature-input");
let tempOutput = document.getElementById("temperature-output");

function calculate() {
    let number;

    if (tempInput.value === "Celcius" && tempOutput.value === "Fahrenheit") {
        number = 9/5 * parseFloat(input.value) + 32;
        output.value = number.toFixed(1);
    } else if (tempInput.value === "Celcius" && tempOutput.value === "Kelvin") {
        number = parseFloat(input.value) + 273;
        output.value = number.toFixed(1);
    } else if (tempInput.value === "Fahrenheit" && tempOutput.value === "Celcius") {
        number = 5/9 * (parseFloat(input.value) - 32);
        output.value = number.toFixed(1);
    } else if (tempInput.value === "Fahrenheit" && tempOutput.value === "Kelvin") {
        number = (5/9 * (parseFloat(input.value) - 32)) + 273;
        output.value = number.toFixed(1);
    } else if (tempInput.value === "Kelvin" && tempOutput.value === "Celcius") {
        number = parseFloat(input.value) - 273;
        output.value = number.toFixed(1);
    } else if (tempInput.value === "Kelvin" && tempOutput.value === "Fahrenheit") {
        number = (parseFloat(input.value) - 273) * 9/5 + 32;
        output.value = number.toFixed(1);
    }
}

function notNan() {
    if (output.value === "NaN") {
        output.value = "";
    } 
}

function dontSameInput() {
    if (tempOutput.value === "Celcius" && tempInput.value === "Celcius") {
        tempOutput.value = "Fahrenheit";
    } else if (tempOutput.value === "Fahrenheit" && tempInput.value === "Fahrenheit") {
        tempOutput.value = "Kelvin";
    } else if (tempOutput.value === "Kelvin" && tempInput.value === "Kelvin") {
        tempOutput.value = "Fahrenheit";
    }
}

function dontSameOutput() {
    if (tempOutput.value === "Celcius" && tempInput.value === "Celcius") {
        tempInput.value = "Fahrenheit";
    } else if (tempOutput.value === "Fahrenheit" && tempInput.value === "Fahrenheit") {
        tempInput.value = "Kelvin";
    } else if (tempOutput.value === "Kelvin" && tempInput.value === "Kelvin") {
        tempInput.value = "Fahrenheit";
    }
}

function temp() {
    if (!(input.value === "") ) {
        calculate();
        notNan();
    } else {
        output.value = "";
    }
}

function temperatureInput() {
    dontSameInput();
    temp();
}

function temperatureOutput() {
    dontSameOutput();
    temp();
}


input.addEventListener("input", temp);
tempInput.addEventListener("change", temperatureInput);
tempOutput.addEventListener("change", temperatureOutput);
