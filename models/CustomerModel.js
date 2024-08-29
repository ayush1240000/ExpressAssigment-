
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("customer", {
        customerid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'userid',
            },
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    Customer.associate = (models) => {
        models.Customer.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return Customer;
};

