// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('bills', {
//       billid: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//       },
//       amount: {
//         type: Sequelize.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       status: {
//         type: Sequelize.ENUM('paid', 'unpaid'),
//         defaultValue: 'unpaid',
//         allowNull: false,
//       },
//       created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//         allowNull: false,
//       },
//       updated_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//         allowNull: false,
//       },
//       customerid: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'customers',
//           key: 'customerid',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//         allowNull: true,
//       },
//       tableno: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'dinnertables',
//           key: 'tableno',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//         allowNull: true,
//       },
//       employeeid: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'employees',
//           key: 'employeeid',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//         allowNull: true,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('bills');
//   }
// };

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
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            tableno: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'dinnertables',
                    key: 'tableno',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            employeeid: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'employees',
                    key: 'employeeid',
                },
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
