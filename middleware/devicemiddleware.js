let Device = require("../model/Device");

const createdevicemiddleware = async (req, res, next) => {
  try {
    let { device_id } = req.body;

    if (!device_id) {
      res.status(400).json({ message: "Device Name Missing" });
    } else {
      var dev = await Device.findOne({ device_id: device_id });

      if (dev) {
        res.status(400).json({ message: "Device Already Exist" });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json({message:error});
  }
};

const deletedevicemiddleware = async (req, res, next) => {
  try {
    let { device_id } = req.body;
    if (!device_id) {
      res.status(400).json({ message: "Device Id Missing" });
    } else {
      var dev = await Device.find({ device_id: device_id });
      if (!dev.length) {
        res.status(400).json({ message: "Device Not Found" });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ message: error || "Something went wrong" });
  }
};

module.exports = {
  createdevicemiddleware,
  deletedevicemiddleware,
};
