const controller=require("../controller/devicecontroller")
const middlewareauth=require("../middleware/authvalidator")
const middlewaredevice=require("../middleware/devicemiddleware")
var route="/api/device"

module.exports=(app)=>{
    app.post(`${route}/adddevice`,[middlewareauth.tokenvalidator,middlewaredevice.createdevicemiddleware],controller.setupdevice);
    app.get(`${route}/getdevicebyid`,[middlewareauth.tokenvalidator],controller.getAlldevicesofUser)
    app.delete(`${route}/deletedevice`,[middlewareauth.tokenvalidator,middlewaredevice.deletedevicemiddleware],controller.deleteDevice)
    app.get(`${route}/getAllApplianceById`,controller.allapplianceindevice)
    app.get("/alldevicebyemail/:email",controller.getAlldevicesofUserbyMailid)
}