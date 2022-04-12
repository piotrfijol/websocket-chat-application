const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3000;

const app = express();
app.use(express.static('public'));
const httpServer = createServer(app);
const io = new Server(httpServer, { port: PORT, hostname: '127.0.0.1' });

io.on("connection", (socket) => {
    console.log("New connection");

    socket.on("message", (data) => {
        console.log("LOG MESSAGE: " + (new Date().toISOString()) + " says " + data.message);
        io.sockets.emit("message", data)
    })
});


httpServer.listen(PORT);