
const bcrypt = require('bcrypt');
const registerModel = require('../Models/registerModel.js');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;

async function registerUser(req,res) {
    try{
       const {username , email , password} = req.body;
        const userId = uuidv4()
        const hashPassword = await bcrypt.hash(password , saltRounds);
        const userToSave = new registerModel({ uuid : userId , username , email , password : hashPassword}) 
         await userToSave.save();
       res.status(201).send({message : "user register successfully"})
    }catch(error){
        console.log("error from register controller" , error.message);
        res.status(500).send({error : error.message})
    }
}

module.exports = {registerUser}