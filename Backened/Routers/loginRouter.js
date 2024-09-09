
const express = require("express");
const { loginUser } = require("../Controllers/login.js");


const loginRouter = express.Router()


loginRouter.post("/" , loginUser)


module.exports = loginRouter