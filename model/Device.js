const mongoose = require("mongoose");
var devices;
try {
  devices = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },

    device_id: { type: String, required: true, unique: true },
    
    device_owner: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    isAssigned: { type: Boolean, default: false },

    appliances: [
      {
        appliance_id: { type: mongoose.Schema.Types.ObjectId, ref: "Appliances" }
      },
    ],
  });
} catch (err) {
  console.log(err);
}

module.exports = mongoose.model("Devices", devices);
