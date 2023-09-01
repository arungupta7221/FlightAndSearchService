const { Op } = require('sequelize')
const { City } = require('../models/index')

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name })
      return city
    } catch (error) {
      console.log('something went wrong in repository layer')
      throw { error }
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      })
      return true
    } catch (error) {
      console.log('something went wrong in repository layer')
      throw { error }
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId)
      return city
    } catch (error) {
      console.log('something went wrong in repository layer')
      throw { error }
    }
  }

  async getAllCities(filter) {
    // filter can be empty here
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        })
        return cities
      }
      const cities = await City.findAll()
      return cities
    } catch (error) {
      console.log('something went wrong in repository layer')
      throw { error }
    }
  }

  async updateCity(data, cityid) {
    try {
      // this below approach also works but it doesn't returned updated object

      // const city = await City.update(data, {
      //   where: {
      //     id: cityid,
      //   },
      // })

      // this below approach returned updated object
      const city = await City.findByPk(cityid)
      city.name = data.name
      await city.save()
      return city
    } catch (error) {
      console.log('something went wrong in repository layer')
      throw { error }
    }
  }
}

module.exports = CityRepository
