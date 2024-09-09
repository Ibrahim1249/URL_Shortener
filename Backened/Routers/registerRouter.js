


const express = require("express");
const { registerUser } = require("../Controllers/register.js");


const registerRouter = express.Router()


registerRouter.post("/" , registerUser)


module.exports = registerRouter