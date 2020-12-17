'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER
      },
      carrierId: {
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      isDelivered: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};