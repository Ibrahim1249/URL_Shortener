
const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
      original_URL : {
         type : String,
         required : true
      },
      short_URL : {
        type : String,
        required : true,
        unique : true
      },
      totalClicks : {
         type : Number,
         default: 0
      },
      visits : [{
          city : {
             type : String,
          },
          device : {
             type : String,
          },
          timestamp : {
              type : Number
          }
      }]

})


const urlModel = mongoose.model("URL" , urlSchema);
module.exports = urlModel