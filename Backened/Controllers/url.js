const shortID = require("shortid");
const urlModel = require("../Models/urlModel");

async function handlePostURL(req,res){
    const body = req.body;
    if(!body.url) {
         res.status(400).json({error : "URL must be their !!"})
    } 
    try{
        const short_id = shortID();
        
        // here i am checking the if i already have same URL that their is not point in adding on db instead i return short_URL correspond to that URL 
        const existingUrl = await urlModel.findOne({original_URL : req.body.url})

        if(existingUrl){
            return res.status(200).json({message : "URL is Already existed" , userShortId : existingUrl.short_URL})
        }

        // here i am creating new URL for user
        const newUrl = new urlModel({
            original_URL : req.body.url,
            short_URL : short_id,
            totalClicks : 0,
            visits : [{
                city : req.userCity || "unknown" ,
                device : req.deviceInfo.name || "unknown",
                timestamp : Date.now()
            }]
        })
        await newUrl.save()
        res.status(201).json({message : "URL is added to DB" , userShortId : short_id})

    }catch (error) {
        console.error('Error saving URL:', error);
        res.status(500).json({ error: "Error saving URL to database" });
    }
}

async function handleGetShortId(req,res){
  const {shortId} = req.params;

  try{
     const originalUrl = await urlModel.findOneAndUpdate(
        { short_URL : shortId} , 
        { $inc : { totalClicks : 1}, 
           $push : {
            visits : {
                city : req.userCity || "unknown" ,
                device : req.deviceInfo.name || "unknown",
                timestamp : Date.now()
            }
        }},
        {new : true}
    )

    if(originalUrl){
         res.redirect(originalUrl.original_URL)
    }else{
        res.status(404).json({ error: "URL not found" });
    }
  }catch(error){
    console.log('Error processing redirect:', error);
    res.status(500).json({ error: "Error processing redirect" });
  }
   

}

async function handleSingleUrlAnalytic(req,res) {
     try{
        const {shortId} = req.params;
        const result = await urlModel.findOne({short_URL : shortId});
        if (!result) {
            return res.status(404).json({ error: "URL not found" });
        }
        const urlHistory = result.visits.map(visit => ({
            city: visit.city,
            device: visit.device
        }));
        res.status(200).json({totalClicks : result.totalClicks , urlHistory})
     }catch(error){
        console.log('Error processing single url analytic:', error);
        res.status(500).json({error : "Error processing single url analytic"})
     }
}

module.exports = {
    handlePostURL,
    handleGetShortId,
    handleSingleUrlAnalytic
}