const { CityService } = require('../services/index')

const cityService = new CityService()

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body)
    return res.status(201).json({
      data: city,
      success: true,
      message: 'successfully creacted a city',
      err: {},
    })
  } catch (error) {
    console.log('something went wrong in controller layer')
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to create a city',
      err: error,
    })
  }
}
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'successfully deleted the city',
      err: {},
    })
  } catch (error) {
    console.log('something went wrong in controller layer')
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to delete a city',
      err: error,
    })
  }
}
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.body, req.params.id)
    console.log(response)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'successfully updated the city',
      err: {},
    })
  } catch (error) {
    console.log('something went wrong in controller layer')
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able update a city',
      err: error,
    })
  }
}
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id)
    return res.status(200).json({
      data: response,
      success: true,
      message: 'successfully fetched the city',
      err: {},
    })
  } catch (error) {
    console.log('something went wrong in controller layer')
    return res.status(500).json({
      data: {},
      success: false,
      message: 'not able to fetched a city',
      err: error,
    })
  }
}

module.exports = {
  create,
  destroy,
  update,
  get,
}
