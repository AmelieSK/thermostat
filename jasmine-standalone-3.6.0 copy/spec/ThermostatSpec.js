describe('Thermostat', () => { 
  let thermostat
  beforeEach(() => {
    thermostat = new Thermostat()
  })

  it('Has a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  })
})