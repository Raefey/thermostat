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
  $( "#get-weather" ).click(function(event) {
    event.preventDefault();
    var city = $( '#city-select' ).val();
    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q='
              + city
              + '&APPID=1e2cd172300e71d547feea5fe13c32b0';
    console.log(apiCall);
    $.get(apiCall, function(data){ updateWeatherInfo(data) });
  })
  $( "#PSMswitch" ).click(function() {
    thermostat._powersavingSwitch();
    updatePowersavingDisplay();
    updateTemperatureDisplay();
  })

  function updateTemperatureDisplay(){
    $( "#temperature" ).text(thermostat.temperature() + '°C');
    if (thermostat.temperature() < 18) {
       $("body").css("background-color", "#ABEDD8")}
    else if (thermostat.temperature() < 25) {
       $("body").css("background-color", "#ECECEB")}
    else { $("body").css("background-color", "#F27370")}
  }
  function updatePowersavingDisplay(){
    $( "#PSM" ).text('Powersaving: ' + thermostat.powersaving());
  }
  function updateWeatherInfo(data){
    $( "#weather-info" ).text(data.weather[0].description
                              + ", "
                              + Math.round(data.main.temp_max - 273.15)
                              + "°C");
  }
});
