function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultElement.innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit";
  }
  
  function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");
  
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
  
    celsiusInput.value = celsius.toFixed(2);
    resultElement.innerHTML = fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius";
  }
  