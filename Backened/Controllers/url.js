const shortID = require("shortid")

function handlePostURL(req,res){
    const body = req.body;
    if(!body.url) {
         res.status(400).json({error : "URL must be their !!"})
    } 
    const id = shortID();
    console.log(req.body.url , id , req.userCity , req.deviceInfo)
    res.status(201).json({message : "URL is added to DB"})
}


module.exports = {
    handlePostURL
}