const axios = require("axios")

async function fetchUserCity(req, res, next){
    let  userIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
       // Check if it's a localhost address
       if (userIp === '::1' || userIp === '127.0.0.1' || userIp.includes('::ffff:127.0.0.1')) {
        // Use a fallback IP for testing (this is a public IP, you can replace it with any known public IP)
        userIp = '4.161.50.143';
    }
     
    try{
        const response = await axios.get(`https://ipapi.co/${userIp}/json/`);
        const cityName = response.data.city;
        //  setting req object with this cityName so that we can access in controller
        req.userCity  = cityName;
    }catch(err){
        console.error("Error fetching city:", err.message);
        req.userCity = "Unknown";
    }
    next()
}

module.exports = fetchUserCity