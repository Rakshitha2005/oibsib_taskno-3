function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");
    var result;
    
    if (inputUnit === "celsius") {
        result = (inputTemperature * 9/5) + 32;
        resultElement.innerHTML = inputTemperature + " degrees Celsius = " + result + " degrees Fahrenheit";
    } else {
        result = (inputTemperature - 32) * 5/9;
        resultElement.innerHTML = inputTemperature + " degrees Fahrenheit = " + result + " degrees Celsius";
    }
}