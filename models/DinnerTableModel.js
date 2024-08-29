

module.exports = (sequelize, DataTypes) => {
    const DinnerTable = sequelize.define("dinnertable", {
        tableno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('occupied', 'vacant'),
            defaultValue: 'vacant',
        },
        customerid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customers',   // Name of the table to reference
                key: 'customerid'     // Key in the referenced table
            }
        },
        employeeid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employees',   // Name of the table to reference
                key: 'employeeid'     // Key in the referenced table
            }
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    DinnerTable.associate = (models) => {
        models.DinnerTable.belongsTo(models.Customer, { foreignKey: 'customerid', as: 'customer' });
        models.DinnerTable.belongsTo(models.Employee, { foreignKey: 'employeeid', as: 'employee' });
    };

    return DinnerTable;
};
