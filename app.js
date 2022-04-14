const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { randomBytes } = require('crypto');

const PORT = process.env.PORT || 5000;
const HOST = 'quick-chat-test.herokuapp.com';

const path = require("path");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { port: PORT, hostname: HOST });

const rooms = {
};

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get("/channel", (req, res) => {
    if(rooms[req.query.id]) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(path.resolve(__dirname, 'public/chat.html'));
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(path.resolve(__dirname, 'public/error404.html'));
    }
})

app.get("/create", (req, res) => {
    // generate random identifier
    let randomString;
    do {
        randomString = randomBytes(8).toString("hex");
    } while(rooms.hasOwnProperty(randomString));

    rooms[randomString] = [];

    res.location(`/channel?id=${randomString}`);
    res.sendStatus(302);
});

app.use(express.static(path.resolve(__dirname, 'public')));


io.of("/channel").on("connection", (socket) => {
    console.log("New connection");
    socket.username = "user-" + randomBytes(2).toString("hex");

    if(!rooms[socket.handshake.query.id])
        return;

    rooms[socket.handshake.query.id].push(socket)

    socket.on("message", (data) => {
        const message = data.message.slice(0, 350);
        const date = (new Date()).toLocaleString().replace(".", "-");

        console.log("[MESSAGE]: " + date + " says " + message);

        for(let i=0; i<rooms[data.room].length; i++) {
            let s = rooms[data.room][i];
            s.emit("message", {
                message,
                date,
                username: socket.username
            })
        }
    })

    socket.on("disconnecting", () => {
        console.log(socket.username);
        let room = socket.handshake.query.id;
        let index = rooms[room].findIndex(el => el.id === socket.id);
        
        rooms[room] = rooms[room].slice(0, index).concat(rooms[room].slice(index+1));
        if(!rooms[room].length)
            delete rooms[room];
    });
    
});


httpServer.listen(PORT);