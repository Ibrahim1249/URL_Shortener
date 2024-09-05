const parse = require("ua-parser-js")


function fetchUserDeviceName(req,res,next){
     const userAgent = req.headers['user-agent'];
     const deviceName = parse(userAgent);
    
     let deviceInformation = {
        type : "unknown",
         name : "unknown",
         os : "unknown"
     }

     if(userAgent.includes("PostmanRuntime")){
        deviceInformation = {
            type: 'API Client',
            name: 'Postman',
            os: 'N/A'
        };
     }else{
        deviceInformation = {
            type: deviceName.device.type || "unknown",
            name: deviceName.device.name || "unknown",
            os: deviceName.device.os || "unknown"
        };
     }

     //  setting the req object with device details 
     req.deviceInfo  = deviceInformation;
   
     next()
}

module.exports = fetchUserDeviceName