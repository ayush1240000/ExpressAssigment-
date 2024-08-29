
module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menu", {
        menuid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        menuName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        menuCategory: {
            type: DataTypes.ENUM('Veg', 'Non-Veg'),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations (if needed in the future)
    Menu.associate = (models) => {
        // Associations can be added here in the future if needed
    };

    return Menu;
};
