const express = require('express')
const { PORT, SYNC_DB } = require('./config/serverConfig')
var bodyParser = require('body-parser')
const CityRepository = require('./repository/city-repository')

const ApiRoutes = require('./routes/index')

const db = require('./models/index')
// const { City } = require('./models/index')
// const city = require('./models/city')

const setupAndStartServer = async () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/api', ApiRoutes)
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
    if (SYNC_DB) {
      db.sequelize.sync({ alter: true })
    }

    // const myCity = await City.findOne({
    //   where: {
    //     id: 4,
    //   },
    // })
    // // console.log(myCity)
    // const airports = await myCity.getAirports()
    // // console.log(airports)
  })
}
setupAndStartServer()
