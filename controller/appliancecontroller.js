var Appliance=require("../model/Appliances")
var Device=require("../model/Device")

exports.createappliance=async(req,res)=>{
    try{


        var{applianceName,device_id}=req.body
        
        var newAppliance={
            applianceName
        }
        var appliance= await new Appliance(newAppliance).save()

        await Device.updateOne({device_id:device_id},{$push:{appliances:{appliance_id:appliance}}})

        res.status(200).json(appliance)

    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})

    }
}

exports.editappliancename=async(req,res)=>{
    try {
        
        var{id,newName}=req.body

        await Appliance.updateOne({_id:id},{$set:{applianceName:newName}})

        res.status(200).json({message:"update success"})
    
    } 
    catch (error) {
        
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})

    }


}
