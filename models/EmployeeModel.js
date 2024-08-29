
module.exports = (sequelize,DataTypes)=>{
    const Employee = sequelize.define("employee",{
        employeeid :{
            type : DataTypes.INTEGER,
            autoincrement : true,
            primaryKey: true
        },
        userid :{
            type:DataTypes.INTEGER,
            references :{
                model: 'users',
                key: 'userid'
            }
        },
        role :{
            type : DataTypes.ENUM('manager','waiter','cleaner'),
            allowNull : false
        }
    })
    return Employee;
}

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
        employeeid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'userid',
            },
        },
        role: {
            type: DataTypes.ENUM('manager', 'waiter', 'cleaner'),
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        paranoid: true,
    });

    // Define associations using Sequelize's associate function
    Employee.associate = (models) => {
        models.Employee.belongsTo(models.User, { foreignKey: 'userid', as: 'user' });
    };

    return Employee;
};
