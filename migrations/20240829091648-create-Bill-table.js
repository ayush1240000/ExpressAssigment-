
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('bills', {
            billid: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            amount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM('paid', 'unpaid'),
                defaultValue: 'unpaid',
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            customerid: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'customers',
                    key: 'customerid',
                },
                allowNull:false,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            tableno: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'dinnertables',
                    key: 'tableno',
                },
                allowNull:false,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            employeeid: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'employees',
                    key: 'employeeid',
                },
                allowNull:false,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            deletedAt: {
              type: Sequelize.DATE,
              allowNull: true,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bills');
    }
};
