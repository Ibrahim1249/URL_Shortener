const express = require("express")

const urlRouter = express.Router()


urlRouter.get("/"); // simple i will show the form / input filed to enter url to shortened
urlRouter.post("/url"); // i will take post request ion this end point and store in database 
urlRouter.get("/:shortId"); // i will redirect user if that short id is their in db correspond to original URL 
urlRouter.get("/analytic/:shortId") // i will simply show the detail of shortUrl visit such as no of click , graph of where user visited along with devices