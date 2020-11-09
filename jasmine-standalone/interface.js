$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#increase-temperature').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease-temperature').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset-temperature').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#PSM-on').click(function() {
    thermostat.switchOnPSM();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#PSM-off').click(function() {
    thermostat.switchOffPSM();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});