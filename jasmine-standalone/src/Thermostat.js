class Thermostat {
  constructor(temperature = 20) {
    this.Temperature = temperature
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

  energyUsage() {
    if (this.getTemperature() < 18) {
      return 'Low Usage'
    }
    else if (this.getTemperature() > 25) {
      return 'High Usage'
    }
    else {
      return 'Medium Usage'
    }
  }

}
