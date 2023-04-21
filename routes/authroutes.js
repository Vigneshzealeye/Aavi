var authcontroller=require("../controller/authcontroller")
var authmiddleware=require("../middleware/signupmiddlewares")


module.exports=(app)=>{
    app.post("/create_user",authmiddleware.signupcheck,authcontroller.createUser);
    app.post("/user_login",authmiddleware.signinvalidator,authcontroller.userSignup)
    
}
