'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Rajiv Gandhi International Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Begumpet Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jaipur International Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pune International Airport',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Airports', null, {})
  },
}
