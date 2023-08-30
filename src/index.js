const express = require('express')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const setupAndStartServer = async () => {
  const app = express()
  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
  })
}
setupAndStartServer()
