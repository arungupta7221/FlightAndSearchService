const express = require('express')
const { PORT } = require('./config/serverConfig')
var bodyParser = require('body-parser')
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
  })
  const city = new CityRepository()
  // city.createCity({
  //   name: 'Mumbai',
  // })
  // await city.createCity({
  //   name: 'Banglore',
  // })
  // city.deleteCity({
  //   cityId: 2,
  // })
}
setupAndStartServer()
