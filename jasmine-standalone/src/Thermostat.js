class Thermostat {
  constructor() {
    this.Temperature = 20
    this.powerSavingMode = true
  }

  getTemperature() {
    return this.Temperature
  }

  increaseTemperature() {
    if(this.powerSavingMode === true) {
      if (this.getTemperature() < 25) {
        this.Temperature ++
      }
      else {
        this.getTemperature()
      }
    }
    else {
      if (this.getTemperature() < 32) {
        this.Temperature ++
      }
      else {
        this.getTemperature()
      }
    }
  }

  decreaseTemperature() {
    if (this.getTemperature() > 10) {
      this.Temperature --
    }
    else {
      this.getTemperature()
    }
  }

  resetTemperature() {
    this.Temperature = 20
  }

  switchOffPSM() {
    this.powerSavingMode = false
  }

  switchOnPSM() {
    this.powerSavingMode = true
  }
}
