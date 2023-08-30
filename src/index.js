const express = require('express')
const { PORT } = require('./config/serverConfig')
var bodyParser = require('body-parser')

const setupAndStartServer = async () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
  })
}
setupAndStartServer()
