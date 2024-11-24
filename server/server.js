const express= require('express')
const mongoose=require('mongoose')
const cookiesParser=require('cookie-parser')
const cors=require('cors')

//create a database connection 
//create a sperate file for this and then import/use that file here

mongoose.connect('mongodb+srv://taskeenfa:6xPtw8oK8SirhgRC@cluster0.4r73b.mongodb.net/')
.then(()=>console.log('mongodb connected'))
.catch((error)=>console.log(error))
const app=express()

app.get('/',(req,res)=>{
   res.send("hello")
})


const PORT= process.env.PORT||3000
app.use(cors({}))
app.listen(PORT)