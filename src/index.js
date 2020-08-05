const http=require("http");
const express=require("express");
const path=require('path');
const socketio=require("socket.io");
const app=express();
const server=http.createServer(app);
const io=socketio(server);//since socket io excepts a raw http we to be sent
app.use(express.static(path.join(__dirname,"../public")));

io.on('connection',(socket)=>{
    console.log("new websocket connection");

    socket.emit("message","Welcome!");

    socket.on("sendMessage",(message)=>{
        io.emit("userMessage",message);
    })
})
server.listen((3000),()=>{
    console.log("Server has started at port 3000");
})