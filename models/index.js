
const { Sequelize, DataTypes } = require('sequelize');
const Dbconfig = require('../config/Dbconfig');

const sequelize = new Sequelize(
    Dbconfig.db,
    Dbconfig.user,
    Dbconfig.password,
    {
        host: Dbconfig.host,
        dialect: Dbconfig.dialect
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./UsersModel.js')(sequelize, DataTypes);
db.Customer = require('./CustomerModel.js')(sequelize, DataTypes);
db.Employee = require('./EmployeeModel.js')(sequelize, DataTypes);
db.Salary = require('./SalaryModel.js')(sequelize, DataTypes);
db.Menu = require('./MenuModel.js')(sequelize, DataTypes);
db.UserOrder = require('./UserOrderModel.js')(sequelize, DataTypes);
db.OrderMenu = require('./OrderMenuModel.js')(sequelize, DataTypes);
db.DinnerTable = require('./DinnerTableModel.js')(sequelize, DataTypes);
db.Bill = require('./BillModel.js')(sequelize, DataTypes);

// Define associations
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        //db.associate();
        db[modelName].associate
    }
});

sequelize.sync({ force: true }).then(() => {
    console.log("Re-sync is completed.");
});

module.exports = db;
