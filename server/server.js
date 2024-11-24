const express= require('express')
const mongoose=require('mongoose')
const cookiesParser=require('cookie-parser')
const cors=require('cors')

//create a database connection 
//create a sperate file for this and then import/use that file here


const app=express()

app.get('/',(req,res)=>{
   res.send("hello")
})


const PORT= process.env.PORT||3000
app.use(cors({
   origin:' http://localhost:5173/',
   methods:['GET','POST','DELETE','PUT'],
   allowedHeaders:[
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
   ],
   credentials:true
}));

app.use(cookiesParser());
app.use(express.json())
app.listen(PORT,()=>console.log(`server is running ${PORT}`))