const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userRoute=require("./routes/User");
const authRoute=require("./routes/auth");
app.use(express.json());


const Db='mongodb+srv://Raj:12345@cluster0.n7xw078.mongodb.net/shop?retryWrites=true&w=majority'

mongoose.connect(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);


app.listen(5000,()=>{
    console.log("Backened Server is Runinig");
});