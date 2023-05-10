var Appliance = require("../model/Appliances");
var Device = require("../model/Device");

exports.createappliance = async (req, res) => {
  try {
    var email=req.email
    console.log(email)
    var { applianceName, device_id ,nodeIndex} = req.body;
    //console.log(device_id)
    var newAppliance = {
      applianceName,
      nodeIndex,
      isAssigned:true,
      capabilities:(req.dimmer&&nodeIndex==0)?"regulator":"switch",
      userMail:email,
      controller_id:device_id
      
      };
    var appliance = await new Appliance(newAppliance).save();

    await Device.updateOne(
      { device_id: device_id },
      { $push: { appliances: appliance._id } }
    );

    res.status(200).json(appliance);
  } catch (error) {
    console.log("Appliance error:"+error);
    res.status(500).json({ message: "Something Went Wrong" });
  } 
};

exports.editappliancename = async (req, res) => {
  try {
    var email=req.email

    var { id, newName } = req.body;

    await Appliance.updateOne(
      { _id: id,userMail:email },
      { $set: { applianceName: newName } }
    );

    res.status(200).json({ message: "update success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.deleteAppliance = async (req, res) => {
  try {
    var email=req.email
    var { id } = req.body;

    await Appliance.deleteOne({ _id: id,userMail:email });

    //await Device.updateOne({"appliances.appliance_id":id},{$pull:{appliances:{appliance_id:id}}})

    res.status(200).json({message:"Deletion Success"});
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.toggle=async(req,res)=>{
  try {
    
    var{switchingstate,id}=req.body

    var nodeStatus=switchingstate[2].toString()==0?false:true

    await Appliance.updateOne({_id:id},{$set:{nodeStatus:nodeStatus}})

    res.status(200).json("Toggle Success")

    
  
  } 
  
  catch (error) {
    res.status(500).json("Something went wrong")
  }
  
}






exports.getApplianceByIdandEmail=async(req,res)=>{

  try{
    var {mail,id}=req.query
    var endpoint={}
    console.log("mail:"+mail)
    console.log("id:"+id)
    var app=await Appliance.findOne({_id:id,userMail:mail})
    // console.log(app)
    //endpoint=app.controller_id.toString()+app.nodeIndex.toString()
    endpoint["Topic"]=app.controller_id
    endpoint["node"]=app.nodeIndex
    res.status(200).json(endpoint)

 
  }
  catch(error){
    console.log("Appliance Error: "+error)
    res.status(500).json("something went wrong")
  }

  

  
}

exports.getAlldevicesofUserbyMailid = async (req, res) => {
  try {
    var email=req.params.email
    console.log("email:"+email);

    let devices = await Device.find({ device_owner: email });
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