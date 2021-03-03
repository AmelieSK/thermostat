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
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#real-feel').text(data.main.feels_like);
    })
  })
});