
module.exports = (sequelize, DataTypes) => {
    const UserOrder = sequelize.define("userorder", {
        orderid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customers',  // Name of the table to reference
                key: 'customerid'    // Key in the referenced table
            },
            allowNull:false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
     {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    UserOrder.associate = (models) => {
        models.UserOrder.belongsTo(models.Customer, { foreignKey: 'customerid', as: 'customer' });
    };

    return UserOrder;
};
