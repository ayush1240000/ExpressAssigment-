
module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define("bill", {
        billid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('paid', 'unpaid'),
            defaultValue: 'unpaid',
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        customerid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customers',
                key: 'customerid',
            },
        },
        tableno: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dinnertables',
                key: 'tableno',
            },
        },
        employeeid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employees',
                key: 'employeeid',
            },
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations
    Bill.associate = (models) => {
        Bill.belongsTo(models.Customer, { foreignKey: 'customerid', as: 'customer' });
        Bill.belongsTo(models.DinnerTable, { foreignKey: 'tableno', as: 'dinnerTable' });
        Bill.belongsTo(models.Employee, { foreignKey: 'employeeid', as: 'employee' });
    };

    return Bill;
};
