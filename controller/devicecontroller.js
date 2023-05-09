const Users = require("../model/User");
const Devices = require("../model/Device");
const Appliance = require("../model/Appliances");
exports.setupdevice = async (req, res) => {
  try {
    var email = req.email;
    console.log(email)
    var { device_id } = req.body;

    let new_device = {
      createdAt: new Date(),

      device_id: device_id,

      device_owner: email
    };

    let newdevice = await new Devices(new_device).save();
    res.status(200).json({message:"New Device Created"});
  } catch (err) {
    console.log(err);
    res.status(500).json({message:"Something Went Wrong"});
  }
};

exports.getAlldevicesofUser = async (req, res) => {
  try {
    

    let email = req.email;

    let devices = await Devices.find({ device_owner: email });

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.getAlldevicesofUserbyMailid = async (req, res) => {
  try {
    var email=req.params.email
    console.log("email:"+email);

    let devices = await Devices.find({ device_owner: email });
    // console.log(Object.getOwnPropertySymbols(devices))
    var op=devices.map(async(e)=>{
     var app=await e.populate("appliances")
     
     return app
     
    })
    // var op2=op.map(async(e)=>{

    // })
   
    Promise.all(op).then((sol)=>res.status(200).json(sol))

    //let app=await devices.populate("appliances")
    
    // res.status(200).json("success");
  } catch (error) {
    console.log(error)
    res.status(500).json({ message:  "Something went wrong" });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    let email = req.email;
    let { device_id } = req.body;
    let devices = await Devices.deleteMany({
      device_owner: email,

      device_id: device_id,
    });

    res.status(200).json("Delete Success");
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: err || "Something went wrong" });
  }
};

exports.allapplianceindevice = async (req, res) => {
  try {
    var { device_id } = req.body;

    var device = await Devices.findOne({ device_id: device_id });

    var { appliances } = await device.populate("appliances");

    console.log(appliances);
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
    res.status(400).json("something went wrong");
  }
};
