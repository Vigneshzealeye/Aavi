const mongoose=require("mongoose")
var devices
try{
   devices = new mongoose.Schema({

        createdAt: { type: Date, default: Date.now },
      device_name: { type: String, required: true },
      device_id:{type:String,required:true},
      device_owner:{type: mongoose.Schema.Types.ObjectId, ref:"Users"}
      
     
      
    
      
    });
}
catch(err)
{
    console.log(err)
}

module.exports=mongoose.model("Devices",devices)