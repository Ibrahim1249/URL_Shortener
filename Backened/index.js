const express = require("express");
const urlRouter = require("./Routers/urlRouter");
const app = express();
const PORT = 6969

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// router
app.use("/url",urlRouter);

app.listen(PORT,()=>{
    console.log("server running on port" , PORT)
})