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
  function updateTemperatureDisplay(){
    $( "#temperature" ).text(thermostat.temperature() + ' °C');
  }
});
