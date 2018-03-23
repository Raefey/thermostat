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

  $( "#PSMswitch" ).click(function() {
    thermostat._powersavingSwitch();
    updatePowersavingDisplay();
  })
  function updateTemperatureDisplay(){
    $( "#temperature" ).text(thermostat.temperature() + ' °C');
  }
  function updatePowersavingDisplay(){
    $( "#PSM" ).text('Powersaving: ' + thermostat.powersaving());
  }
});
