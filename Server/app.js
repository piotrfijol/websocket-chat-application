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
});

httpServer.listen(PORT);