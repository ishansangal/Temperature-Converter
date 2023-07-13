function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var unitInput = document.getElementById("unit");
    var result = document.getElementById("result");
  
    var temperature = parseFloat(temperatureInput.value);
    var unit = unitInput.value;
  
    if (unit === "celsius") {
      var fahrenheit = (temperature * 9/5) + 32;
      result.innerHTML = temperature + " Celsius = " + fahrenheit + " Fahrenheit";
    } else if (unit === "fahrenheit") {
      var celsius = (temperature - 32) * 5/9;
      result.innerHTML = temperature + " Fahrenheit = " + celsius + " Celsius";
    }
  }
  