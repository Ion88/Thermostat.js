$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.turnUp();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.turnDown();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPsmOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPsmOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
   if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
   } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'black')
   } else {
    $('#temperature').css('color', 'red')
   }
  };
});
