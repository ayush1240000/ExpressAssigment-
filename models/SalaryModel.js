const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Salary = sequelize.define("salary", {
        salaryId: {  
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        salaryAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        employeeid: {  
            type: DataTypes.INTEGER,
            references: {
                model: 'employees',  
                key: 'employeeid'
            },
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    Salary.associate = (models) => {
        models.Salary.belongsTo(models.Employee, { foreignKey: 'employeeid', as: 'employee' });
    };

    return Salary;
};
