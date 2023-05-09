const mongoose=require("mongoose")

var appliance=new mongoose.Schema(
    {
        createdAt: { type: Date, default: Date.now },
        applianceName: { type: String, required: true },
        nodeIndex:{type:Number},
        isAssigned: { type: Boolean, default: false },
        switchStatus:{type:Boolean,default:false},
        nodeStatus:{type:Boolean,default:false},
        onTime:{type:String, default:null},
        capabilities:{type:String, default:"switch"},
        userMail:{type:String,required:true},
        controller_id:{type:String,required:true}
    }
)

module.exports=mongoose.model("Appliances",appliance)