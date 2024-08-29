// const db = require('../models');
// const User = db.User;

// const addUser =async (req,res)=>{
//     let info ={
//         fname: req.body.fname,
//         lname:req.body.lname,
//         contactNumber :req.body.contactNumber
//     }

//     const user = await User.create(info)
//     res.status(200).send(user)
//     console.log(user)
// }

// const getallUser = async (req,res)=>{
//     let users = await User.findAll({})
//     res.status(200).send(users)
//     // console.log(user)
// }

// const getOneUser = async (req, res) => {

//     let id = req.params.user_id
//     let user = await User.findOne({ where: {userid : id}})
//     res.status(200).send(user)

// }

// const deleteUser = async(req,res) =>{
//     let id= req.params.userid
//     await User.destroy({where: {userid :id}})
//     console.log("delete record", id)
// }

// const UpdateUser = async(req,res)=>{
//     let id = req.params.userid
//     await User.update({where : {userid : id}})
//     console.log("updated the record",id);
    
// }


// module.exports ={
//     addUser,
//     getallUser,
//     getOneUser,
//     deleteUser,
//     UpdateUser
// }


// // 
const UserDTO = require('../dto/UserDTO');
const userService = require('../services/userServices');

const addUser = async (req, res) => {
    try {
        const userDTO = new UserDTO(req.body);
        const user = await userService.addUser(userDTO);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getallUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getOneUser = async (req, res) => {
    try {
        const id = req.params.user_id;
        const user = await userService.getUserById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.userid;
        const result = await userService.deleteUser(id);
        if (result) {
            res.status(200).send({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const UpdateUser = async (req, res) => {
    try {
        const id = req.params.userid;
        const updateData = req.body;
        const [affectedRows] = await userService.updateUser(id, updateData);
        if (affectedRows > 0) {
            res.status(200).send({ message: 'User updated successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    addUser,
    getallUsers,
    getOneUser,
    deleteUser,
    UpdateUser
};
