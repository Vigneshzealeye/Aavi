const exp=require("express")
const cors=require("cors")
const app=exp()

app.use(exp.json())
app.use(cors())
require('dotenv').config();

const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/TwinV").then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
require("./routes/authroutes")(app)
require("./routes/deviceroutes")(app)
require("./routes/roomroutes")(app)
require("./routes/applianceroutes")(app)

let port=process.env.PORT
app.listen(port,()=>{console.log(`app running at ${port}`)})