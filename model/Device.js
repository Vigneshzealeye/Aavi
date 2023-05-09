const mongoose = require("mongoose");
var devices;
try {
  devices = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },

    device_id: { type: String, required: true},
    
    device_owner: { type: String, required:true ,default:"null"},
    isAssigned: { type: Boolean, default: false },

    appliances: [
      
         { type: mongoose.Schema.Types.ObjectId, ref: "Appliances"}
      
    ],
  });
} catch (err) {
  console.log(err);
}

module.exports = mongoose.model("Devices", devices);
