'use strict'

const express=require ("express")
const app= express()
const stamper= require("./middlewares/stamper")
const notFoundHandler= require("./handlers/404")
const errorHandler =require("./handlers/500")



app.get("/",(req,res)=>{
    res.send('welcome to home page')
})

app.get("/data",stamper,sendRes)

function sendRes(req,res){
    res.json({
        id: 1,
        name: "Emma",
        time: req.timeStamp
    })
}

app.get("/bad",(req,res)=>{
    let num=10;
    let result= num.forEach((x)=>{
        console.log(x)
    })
    res.send(result)
})

app.use("*",notFoundHandler)
app.use(errorHandler)


function start(port){
    app.listen(port,()=>{
        console.log(`app is ready and listen on port ${port}`)
    })
}

module.exports={
    start: start,
    app: app
}