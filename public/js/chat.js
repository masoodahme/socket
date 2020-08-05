var socket=io();
socket.on("message",(message)=>{
    console.log(message);
})

document.querySelector("#message-form").addEventListener("submit",(e)=>{
       e.preventDefault();
       //here e.target -->form 
       var message=e.target.elements.message.value;//alternate to document.getElementById
       socket.emit("sendMessage",message);
})

socket.on("userMessage",(messages)=>{
    console.log(messages);
})