const { FlightRepository, AirplaneRepository } = require('../repository/index')
const { compareTime } = require('../utils/helper')
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository()
    this.flightRepository = new FlightRepository()
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime > data.departureTime)) {
        throw { error: 'Arrival time should be more than departure time' }
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      })
      return flight
    } catch (error) {
      console.log('something went wrong at service layer')
      throw { error }
    }
  }
}

module.exports = FlightService
