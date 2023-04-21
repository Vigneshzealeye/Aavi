const exp=require("express")

const app=exp()

app.use(exp.json())

const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/aawi").then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
require("./routes/authroutes")(app)
app.listen(8000,()=>{console.log("app running at 8000")})