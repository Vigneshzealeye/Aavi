const Users = require("../model/User");
const Devices = require("../model/Device");

exports.setupdevice = async (req, res) => {
  try {
    var id = req.uid;

    var user = await Users.findOne({ _id: id });

    var { device_name, device_id } = req.body;
    let new_device = {
      createdAt: new Date(),
      device_name,
      device_id,
      device_owner: user,
    };

    let newdevice = await new Devices(new_device).save();
    res.status(200).json(newdevice);
  } catch (err) {
    console.log(err);
    res.status(500).json(err || "Something Went Wrong");
  }
};

exports.getAlldevicesofUser = async (req, res) => {
  try {
    let id = req.uid;

    let devices = await Devices.find({ device_owner: id });

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({message:error||"Something went wrong"});
  }
};

exports.editDevicename=async(req,res)=>{
    try{

        let id = req.uid;
        let {oldName,newName}=req.body

    let devices = await Devices.updateMany({ device_owner: id ,device_name:oldName},{$set:{device_name:newName}})
    res.status(200).json("Edit Success")

    }
    catch(err)
    {
        res.status(500).json({message:err||"Something went wrong"});
    }
}

exports.deleteDevice=async(req,res)=>{
    try {
        let id = req.uid;
        let{Name}=req.body
        let devices = await Devices.deleteMany({ device_owner: id ,device_name:Name})

        res.status(200).json("Delete Success")





    } catch (error) {

        
        res.status(500).json({message:err||"Something went wrong"});
        
    }
}
