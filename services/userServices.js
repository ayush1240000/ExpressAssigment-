const db = require('../models');
const User = db.User;

const addUser = async (userDTO) => {
    return await User.create(userDTO);
};

const getAllUsers = async () => {
    return await User.findAll({});
};

const getUserById = async (id) => {
    return await User.findOne({ where: { userid: id } });
};

const deleteUser = async (id) => {
    return await User.destroy({ where: { userid: id } });
};

const updateUser = async (id, updateData) => {
    return await User.update(updateData, { where: { userid: id } });
};

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
};
