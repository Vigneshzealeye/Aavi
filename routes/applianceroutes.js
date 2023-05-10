var appliancecontroller=require("../controller/appliancecontroller")
var appliancemiddleware=require("../middleware/appliancemiddleware")
var authmiddleware=require("../middleware/authvalidator")


module.exports=(app)=>{
    app.post("/addappliance",[appliancemiddleware.appliancemiddleware,authmiddleware.tokenvalidator],appliancecontroller.createappliance)
    app.patch("/editappliancename",[authmiddleware.tokenvalidator],appliancecontroller.editappliancename)
    app.delete("/deleteappliance",[authmiddleware.tokenvalidator],appliancecontroller.deleteAppliance)
    app.post("/toggleState",appliancecontroller.toggle)
    app.get("/alldevicebyemail/:email",appliancecontroller.getAlldevicesofUserbyMailid)
    app.get("/getApplianceByIdandEmail",appliancecontroller.getApplianceByIdandEmail)
}