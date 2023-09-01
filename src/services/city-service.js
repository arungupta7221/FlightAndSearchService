const { CityRepository } = require('../repository/index')

class CityService {
  // here we are using constructor , in repository we are not using constructor
  constructor() {
    this.cityRepository = new CityRepository()
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data)
      return city
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId)
      return response
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
  async updateCity(data, cityId) {
    try {
      const city = await this.cityRepository.updateCity(data, cityId)
      return city
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId)
      return city
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({ name: filter.name })
      return cities
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
}

module.exports = CityService
