const mongoose=require("mongoose")

var appliance=new mongoose.Schema(
    {
        createdAt: { type: Date, default: Date.now },
        applianceName: { type: String, require: true },
        isAssigned: { type: Boolean, default: false },
        powerStatus:{type:Boolean,default:false},
        onTime:{type:String, default:null}
        
    }
)

module.exports=mongoose.model("Appliances",appliance)