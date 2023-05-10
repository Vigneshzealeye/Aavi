let Rooms = require("../model/Room");
let Users = require("../model/User");
let Device = require("../model/Device");
let Appliance = require("../model/Appliances");

exports.getroomdetails = async (req, res) => {
  try {
    var email = req.email;
    var { room_name } = req.body;

    var room = await Rooms.findOne({ room_owner: email, room_name: room_name });
          await room.populate("devices")
     //console.log(room)

    res.status(200).json(room);
  } catch (error) {
    console.log(error);
    res.status(500).json("something went wrong");
  }
};

exports.createroom = async (req, res) => {
  try {
    var { room_name } = req.body;
    var email = req.email;
    var newroom = {
      room_name: room_name,
      
      room_owner: email,
    };

    var room = await Rooms(newroom).save();
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ");
  }
};

exports.addroomdevice = async (req, res) => {
  try {
    var { room_name,_device} = req.body;
    

    var email = req.email;
    var dev=await Device.findOne({device_id:_device})
    
    await Rooms.updateOne(
      { room_name: room_name, room_owner: email },
      { $push: { devices: dev._id } }
    );  
    await Device.updateOne({device_id:_device},{$set:{isAssigned:true}})

    res.status(200).json({message:"Devices Added Successfully"} );
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Something went wrong "});
  }
};

// exports.editroomdevice = async (req, res) => {
//   try {
//     var { room_name } = req.body;
//     var { old_id, new_id } = req.body;
//     var email = req.email;
//     var devOld=await Device.findOne({device_id:old_id})
//     var devNew=await Device.findOne({device_id:new_id,device_owner:email})
//     if(!devNew)
//     {
//       res.status(400).json({message:`${new_id} Doesn't Exist or Not Assiged to User`})
//     }
//     else{
//       await Rooms.updateOne(
//         { room_name: room_name, room_owner: email },
//         { $pull: { devices: { device_id: devOld._id } } }
//       );
//       await Rooms.updateOne(
//         { room_name: room_name, room_owner: id },
//         { $push: { devices: { device_id: devNew._id } } }
//       );
//       res.status(200).json({message:"Devices Added Successfully"});

//     }
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Something went wrong ");
//   }
// };

exports.deleteroom = async (req, res) => {
  try {
    var email = req.email;
    var { room_name } = req.body;
    
    var roomdevice = await Rooms.findOne({ room_owner: email, room_name: room_name });
    
    

    await Device.updateMany(
      { _id: roomdevice.devices },
      { $set: { isAssigned: false } }
    ); 

    

    await Rooms.deleteOne({ room_owner: email, room_name: room_name });

    res.status(200).json({Message:"Deletion Success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error || "something went wrong" });
  }
};

exports.editroom = async (req, res) => {
  try {
    var email = req.email;
    var { room_name, new_room_name } = req.body;
    console.log( room_name, new_room_name)
    console.log(email)
    var op=
    await Rooms.updateOne(
      { room_owner: email, room_name: room_name },
      { $set: { room_name: new_room_name } }
    );
 
  
      console.log(op)

    res.status(200).json({message:"Edit Success"});
  } catch (error) {
    res.status(500).json({ message: error || "something went wrong" });
  }
};
exports.allappliancesinroom = async (req, res) => {
  try {
    var email = req.email;
    var { room_name } = req.body;

    var room = await Rooms.findOne({ room_owner: email, room_name: room_name });
    
    var {devices}=await room.populate("devices")
    var deviceId = [];
    devices.forEach((e) => {
      deviceId.push(e.device_id);
    });
    
    var device=await Device.findOne({device_id:deviceId})
    var {appliances}=await device.populate("appliances")
    
    

    console.log(appliances);
    res.status(200).json(appliances);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Some thing went Wrong" });
  }
};
   