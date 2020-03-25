'use strict'

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  turnUp() {
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
}
