const bcrypt=require("bcrypt")
const Users=require("../model/User")

const jwt=require("jsonwebtoken")

exports.createUser=async(req,res)=>{
    
    try{

        var{name,mobile,email,password}=req.body

        password=bcrypt.hashSync(password,5)
        var [code,expiry]=require("../utils/otpgenerator").otp()
        
        var data={
            name,
            mobile,
            email,
            password:password,
            otp:{
                code:code,
                expiry:new Date().getTime()+expiry
            }
        }
        var user=await new Users(data).save();

        res.status(200).json(user)


    }
    catch(err)
    {
        res.status(500).json("Something Went Wrong")
    }
}

exports.userSignup=async(req,res)=>{

    try{
        var{email,password}=req.body

        var user=await Users.findOne({email:email})
        

        var valid=await bcrypt.compare(password,user.password)
       
        if(!valid)
        {
            res.status(400).json("Wrong Password")
            return
        }
        else{

            var token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"30Days"})

        res.status(200).json(`Verification Success your jwt ${token}`)
        }
        




    }
    catch(err)
    {

        res.status(500).json("something went wrong")

    }
}