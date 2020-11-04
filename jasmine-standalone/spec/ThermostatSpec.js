describe('Thermostat', () => { 
  let thermostat
  beforeEach(() => {
    thermostat = new Thermostat()
  })
  
  describe('getTemperature', () => {

    it('Has a default temperature of 20', () => {
      expect(thermostat.getTemperature()).toEqual(20)
    })

    it('increases the temperature by 1', () => {
      thermostat.increaseTemperature()
      expect(thermostat.getTemperature()).toEqual(21)
    })

    it('increases the temperature up to 25 when power saving mode is on', () => {
      for(var i = 10; i <= 25; i++ ) {
        thermostat.increaseTemperature()
      }
      expect(thermostat.getTemperature()).toEqual(25)
    })

    it('increases the temperature up to 32 when power saving mode is off', () => {
      thermostat.switchOffPSM()
      for(var i = 10; i <= 32; i++ ) {
        thermostat.increaseTemperature()
      }
      expect(thermostat.getTemperature()).toEqual(32)
    })

    it('decreases the temperature by 1', () => {
       thermostat.decreaseTemperature()
      expect(thermostat.getTemperature()).toEqual(19)
    })

    it('Has a minimum temperature of 10', () => {
      for(var i = 0; i < 11; i++ ) {
        thermostat.decreaseTemperature()
      }
      expect(thermostat.getTemperature()).toEqual(10)
    })

    it('resets the temperature to 20 degrees', () => {
      thermostat.decreaseTemperature()
      thermostat.resetTemperature()
      expect(thermostat.getTemperature()).toEqual(20)

    })
  })

  describe('Power saving mode', () => {

    it('is set on by default', () => {
      expect(thermostat.powerSavingMode).toEqual(true)
    })

    it('can be switched off', () => {
      thermostat.switchOffPSM()
      expect(thermostat.powerSavingMode).toEqual(false)
    })

    it('can be switched on', () => {
      thermostat.switchOffPSM()
      thermostat.switchOnPSM()
      expect(thermostat.powerSavingMode).toEqual(true)
    })
  })

  describe('Energy usage', () => {
    it('shows low usage when the temperature is under 18 degrees', () => {
      thermostat = new Thermostat(17)
      expect(thermostat.energyUsage()).toEqual('Low Usage')
    })

    it('shows high usage when the temperature is over 25 degrees', () => {
     thermostat = new Thermostat(26)
     expect(thermostat.energyUsage()).toEqual('High Usage') 
    })

    it('shows medium usage when the temperature is between 18 and 25 degrees', () => {
      expect(thermostat.energyUsage()).toEqual('Medium Usage')
    })


  })

})