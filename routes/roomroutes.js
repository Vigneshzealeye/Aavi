var controller=require("../controller/roomscontroller")
var authmiddleware=require("../middleware/authvalidator")
var roomsmiddleware=require("../middleware/roomsmiddleware") 

module.exports=(app)=>{
    app.post("/createrooms",[authmiddleware.tokenvalidator],controller.createroom);
    app.patch("/adddevicetoroom",[authmiddleware.tokenvalidator,roomsmiddleware.devicevalidator,roomsmiddleware.roomsmiddleware],controller.addroomdevice);
    app.patch("/editroomname",[authmiddleware.tokenvalidator,roomsmiddleware.roomsmiddleware],controller.editroom)
    app.delete("/deleteroom",[authmiddleware.tokenvalidator,roomsmiddleware.roomsmiddleware],controller.deleteroom)
    app.get("/getroomofuser",[authmiddleware.tokenvalidator,roomsmiddleware.roomsmiddleware],controller.getroomdetails)
    app.get("/allappliancesinroom",authmiddleware.tokenvalidator,controller.allappliancesinroom)
    //app.patch("/editroomdevice",[authmiddleware.tokenvalidator],controller.editroomdevice)
}