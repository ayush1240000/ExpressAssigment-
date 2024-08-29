const db = require('../models');
const User = db.User;

const addUser =async (req,res)=>{
    let info ={
        fname: req.body.fname,
        lname:req.body.lname,
        contactNumber :req.body.contactNumber
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)
}

const getallUser = async (req,res)=>{
    let users = await User.findAll({})
    res.status(200).send(users)
    // console.log(user)
}

const getOneUser = async (req, res) => {

    let id = req.params.user_id
    let user = await User.findOne({ where: {userid : id}})
    res.status(200).send(user)

}

const deleteUser = async(req,res) =>{
    let id= req.params.userid
    await User.destroy({where: {userid :id}})
    console.log("delete record", id)
}

const UpdateUser = async(req,res)=>{
    let id = req.params.userid
    await User.update({where : {userid : id}})
    console.log("updated the record",id);
    
}


module.exports ={
    addUser,
    getallUser,
    getOneUser,
    deleteUser,
    UpdateUser
}




// 