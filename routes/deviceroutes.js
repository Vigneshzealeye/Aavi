const controller=require("../controller/devicecontroller")
const middleware=require("../middleware/authvalidator")

module.exports=(app)=>{
    app.post("/adddevice",middleware.tokenvalidator,controller.setupdevice);
    app.get("/getdevicebyid",middleware.tokenvalidator,controller.getAlldevicesofUser)
    app.patch("/editdevice",middleware.tokenvalidator,controller.editDevicename)
    app.delete("/deletedevice",middleware.tokenvalidator,controller.deleteDevice)
}