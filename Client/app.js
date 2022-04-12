import {io} from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

const sendMessage = document.querySelector("#send-message");
const messageContent = document.querySelector("input#message")
sendMessage.addEventListener('click', e => {
    socket.emit("message", {
        message: messageContent.value,
    }); 
})

socket.on("message", (data) => {
    newMessage(data.message);
});

const messageBox = document.querySelector(".chat__message-box");

function newMessage(msg) {
    const newMsg = document.createElement("div");
    newMsg.classList = "chat__message-box__message";
    
    const msgUsername = document.createElement("p");
    msgUsername.classList = "chat__message-box__message__username";
    msgUsername.textContent = "username";

    const msgContent = document.createElement("p");
    msgContent.classList = "chat__message-box__message__content";
    msgContent.textContent = msg;
    
    newMsg.appendChild(msgUsername);
    newMsg.appendChild(msgContent);
    messageBox.appendChild(newMsg);
}