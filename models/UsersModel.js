module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        userid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactNumber: {
            type: DataTypes.BIGINT,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    User.associate = (models) => {
        // One-to-One relationship with Customer
        models.User.hasOne(models.Customer, { foreignKey: 'userId', as: 'customer' });
        models.Customer.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

        // One-to-One relationship with Employee
        models.User.hasOne(models.Employee, { foreignKey: 'userid', as: 'employee' });
        models.Employee.belongsTo(models.User, { foreignKey: 'userid', as: 'user' });
    };

    return User;
};
