class Thermostat {
  constructor() {
    this.Temperature = 20
  }

  getTemperature() {
    console.log(this.Temperature)
    return this.Temperature
  }

  increaseTemperature() {
    this.Temperature ++
  }

  decreaseTemperature() {
    this.Temperature --
  }
}
