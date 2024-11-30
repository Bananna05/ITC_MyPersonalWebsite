// Celsius to Fahrenheit Conversion
document.getElementById("btnCelsiusToFahrenheit").addEventListener("click", () => {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheitResult").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("fahrenheitResult").innerText = "Please enter a valid number.";
    }
});

// Fahrenheit to Celsius Conversion
document.getElementById("btnFahrenheitToCelsius").addEventListener("click", () => {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsiusResult").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
    } else {
        document.getElementById("celsiusResult").innerText = "Please enter a valid number.";
    }
});

// Meters to Feet Conversion
document.getElementById("btnMetersToFeet").addEventListener("click", () => {
    var meters = parseFloat(document.getElementById("meters").value);
    if (!isNaN(meters)) {
        var feet = meters * 3.28084;
        document.getElementById("feetResult").innerText = meters + " meters = " + feet.toFixed(2) + " feet";
    } else {
        document.getElementById("feetResult").innerText = "Please enter a valid number.";
    }
});

// Feet to Meters Conversion
document.getElementById("btnFeetToMeters").addEventListener("click", () => {
    var feet = parseFloat(document.getElementById("feet").value);
    if (!isNaN(feet)) {
        var meters = feet / 3.28084;
        document.getElementById("metersResult").innerText = feet + " feet = " + meters.toFixed(2) + " meters";
    } else {
        document.getElementById("metersResult").innerText = "Please enter a valid number.";
    }
});
