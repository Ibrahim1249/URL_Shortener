const express = require("express");
const urlRouter = require("./Routers/urlRouter");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


// router
app.use("/",urlRouter);

