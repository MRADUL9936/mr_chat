const {Server}=require("socket.io")
const http=require("http")
const express=require('express')

const app=express()

const server=http.createServer(app)

const io=new Server(server,{
    cours:{
        origin:[],
        methods:["GET","POST"]
    }
})

io.on('connection',(socket)=>{
    console.log("A user connected",socket.id)

    socket.on('disconnect',()=>{
        console.log("User disconnected",socket.id)
    })
})


module.exports={app,io,server}