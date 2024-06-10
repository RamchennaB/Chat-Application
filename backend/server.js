const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
   cors: {
    origin : "http://localhost:3000",
     },
});

io.on("connection", (socket) => {
 console.log(socket);
 console.log("Socket is active");

 socket.on("chat",(payload) => {
    console.log(payload);
    io.emit("chat", payload);

 });

});
server.listen(5000, () => {
    console.log("Server is listening at port 4000");
});