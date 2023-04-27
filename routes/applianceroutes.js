var appliancecontroller=require("../controller/appliancecontroller")
var appliancemiddleware=require("../middleware/appliancemiddleware")


module.exports=(app)=>{
    app.post("/addappliance",appliancemiddleware.appliancemiddleware,appliancecontroller.createappliance)
    app.patch("/editappliancename",appliancecontroller.editappliancename)
    app.delete("/deleteappliance",appliancecontroller.deleteAppliance)
}