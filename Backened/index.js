const express = require("express");
const urlRouter = require("./Routers/urlRouter");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 6969

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb://127.0.0.1:27017/geekster").then(()=>{
    app.listen(PORT,()=>{
        console.log("server running on port" , PORT)
    })
}).catch((error)=>{
    console.log(error.message)
})


// router
app.use("/url",urlRouter);

