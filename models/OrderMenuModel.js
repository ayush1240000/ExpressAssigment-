
module.exports = (sequelize, DataTypes) => {
    const OrderMenu = sequelize.define("ordermenu", {
        orderid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'userorders', // Name of the table to reference
                key: 'orderid'       // Key in the referenced table
            },
            allowNull:false
        },
        menuid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menus',      // Name of the table to reference
                key: 'menuid'        // Key in the referenced table
            },
            allowNull:false
        },
        quantity: {
            type: DataTypes.INTEGER,
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
    OrderMenu.associate = (models) => {
        models.OrderMenu.belongsTo(models.UserOrder, { foreignKey: 'orderid', as: 'userorder' });
        models.OrderMenu.belongsTo(models.Menu, { foreignKey: 'menuid', as: 'menu' });
    };

    return OrderMenu;
};
