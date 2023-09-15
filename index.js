const express=require('express')
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/sign-up",(req,res)=>{
const name=req.body.name
const email=req.body.email
const password=req.body.password

console.log(name,email,password)


})




app.listen(3000,()=>{
    console.log("server is running on 3000")
})