'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dinnertables', {
      tableno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('occupied', 'vacant'),
        defaultValue: 'vacant',
        allowNull: false,
      },
      customerid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',  // Name of the table to reference
          key: 'customerid'    // Key in the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      employeeid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',  // Name of the table to reference
          key: 'employeeid'    // Key in the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dinnertables');
  }
};
