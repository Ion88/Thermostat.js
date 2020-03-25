'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('turns the temperature up', function() {
    thermostat.turnUp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('turns the temperature down', function() {
    thermostat.turnDown();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('stop thermostat at 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('PSM is on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('PSM can be turned off', function() {
    thermostat.switchPsmOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('PSM can be turned on', function() {
    thermostat.switchPsmOff();
    thermostat.switchPsmOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('limit temperature to 25 degrees when PSM is activated', function() {
    for (var i = 0; i < 7; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('limit temperature to 32 degrees when PSM is off', function() {
    thermostat.switchPsmOff();
    for (var i = 0; i < 13; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('reset thermostat at default temperature', function() {
    thermostat.turnUp();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('displaying usage levels', function() {
    describe('when temperature is below 18 degrees', function() {
      it('it is considered as low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.turnDown();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when temperature is between 18 and 25 degrees', function() {
      it('is considered as medium usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when temperature is above 25 degrees', function() {
      it('is considered as high usage', function() {
        thermostat.Psm = false;
        for (var i = 0; i < 6; i++) {
          thermostat.turnUp();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
