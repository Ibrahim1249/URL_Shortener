const express = require("express");
const urlRouter = require("./Routers/urlRouter");
const { default: mongoose } = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config()
const app = express();

const port = process.env.PORT || 3000

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log("server running on port" , port)
    })
}).catch((error)=>{
    console.log(error.message)
})


// router
app.use("/url",urlRouter);

