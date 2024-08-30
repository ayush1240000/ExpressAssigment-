const express = require('express');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const Userrouter = require('./routes/UserRoute.js');
app.use('/api/users', Userrouter);

const Customerrouter = require('./routes/CustomerRoute.js');
app.use('/api/customers', Customerrouter);

const Employeerouter = require('./routes/EmployeeRoute.js');
app.use('/api/employee', Employeerouter);

const Salaryrouter = require('./routes/SalaryRoute.js');
app.use('/api/salary', Salaryrouter);





const port = process.env.PORT || 8080;

app.listen(port , ()=>{
    console.log("server is running");
})