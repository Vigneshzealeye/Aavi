let Device = require("../model/Device");
let Rooms = require("../model/Room");
let Users = require("../model/User");
let authmiddleware=require("../middleware/authvalidator")


const devicevalidator = async (req, res, next) => {
  try {
    var { _device } = req.body;

    
    let email = req.email;

    let devices = await Device.findOne({ device_owner: email,device_id:_device});
  
    
   if(!devices)
   {
    res.status(400).json({message:"Device Doesn't Exist Or Not Assigned to User"})
   }
   else if(devices.isAssigned)
   {
    res.status(400).json({message:"Device Already Assigned"})
   }
   else{
    next()
   }
    

    
  } catch (error) {
    console.log( error);
    res.status(500).json("Something went wrong ");
  }
};
var roomsmiddleware=async(req,res,next)=>{

  try {

    var { room_name } = req.body; 

    var room=await Rooms.find({room_name:room_name})
    

    if(!room.length)
    {
      res.status(400).json({message:"Room not Available"})
    }
    else{
      
      next()
    }
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Something went wrong"})
  }
}
module.exports = {
  devicevalidator,
  roomsmiddleware
};
