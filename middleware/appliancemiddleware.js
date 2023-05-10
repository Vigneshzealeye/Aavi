var Device = require("../model/Device");
const appliancemiddleware = async (req, res, next) => {
  try {
    var { applianceName, device_id } = req.body;

    if (Object.keys(req.body).length == 0) {
      res
        .status(400)
        .json({ message: "Appliance Name and Device_id is Missing" });
    } else if (!applianceName) {
      res.status(400).json({ mesage: "Appliance Name Missing" });
    } else if (!device_id) {
      res.status(400).json({ mesage: "Device Id Missing" });
    } else {
      var nodes = device_id.split("-")[1]  //TH-Nx[D]-v5.0-YYYYMM-0000
      var nodelength=nodes[1]
      var dimmer=nodes.length==3?true:false
      var device = await Device.findOne({ device_id: device_id });  
      req.dimmer=dimmer
      console.log(device.appliances.length);
      if (device.appliances.length >= nodelength) {
        res.status(400).json("No Free Node Available on Device");
      } else {
        next();
      }
    }
  } catch (error) {
    console.log("Middleware"+error)
  }
};

module.exports = {
  appliancemiddleware,
};
