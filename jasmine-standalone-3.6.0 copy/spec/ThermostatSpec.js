describe('Thermostat', () => { 
  let thermostat
  beforeEach(() => {
    thermostat = new Thermostat()
  })

  it('Has a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('increases the temperature by 1', () => {
    thermostat.increaseTemperature()
    expect(thermostat.getTemperature()).toEqual(21)
  })

  it('decreases the temperature by 1', () => {
    thermostat.decreaseTemperature()
    expect(thermostat.getTemperature()).toEqual(19)
  })
})