$( document ).ready(function() {

  var thermostat = new Thermostat();

  $( "#temperature-up" ).click(function() {
    thermostat.up();
    updateTemperatureDisplay();
  })
  $( "#temperature-down" ).click(function() {
    thermostat.down();
    updateTemperatureDisplay();
  })
  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    updateTemperatureDisplay();
  })
  $( "#get-weather" ).click(function() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1e2cd172300e71d547feea5fe13c32b0', function(data){
      updateWeatherInfo(data);
    })
  })

  $( "#PSMswitch" ).click(function() {
    thermostat._powersavingSwitch();
    updatePowersavingDisplay();
    updateTemperatureDisplay();
  })
  function updateTemperatureDisplay(){
    $( "#temperature" ).text(thermostat.temperature() + ' °C');
  }
  function updatePowersavingDisplay(){
    $( "#PSM" ).text('Powersaving: ' + thermostat.powersaving());
  }
  function updateWeatherInfo(data){
    $( "#weather-info" ).text("Weather: " + data.weather[0].description + ", Temperature: " + Math.round(data.main.temp_max - 273.15));
  }
});
