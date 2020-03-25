'use strict'

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.Psm = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  turnUp() {
    if(this.isMaximumTemperature()) {
      return;
    }
    this.temperature++;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  turnDown() {
    if(this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }

  isPowerSavingModeOn() {
    return this.Psm;
  }

  switchPsmOff() {
    this.Psm = false;
  }

  switchPsmOn() {
    this.Psm = true;
  }

  isMaximumTemperature() {
    if(this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }
}
