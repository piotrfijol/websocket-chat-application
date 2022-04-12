import {io} from 'socket.io-client';


let queryParams = new URLSearchParams(window.location.search);

if(queryParams.get('id')) {
    
    const socket = io("/channel", {
        query: 'id='+ queryParams.get('id')
    });

    const sendMessageBtn = document.querySelector("#send-message");
    const messageContent = document.querySelector("input#message")


    sendMessageBtn.addEventListener('click', () => {
        sendMessage(messageContent);
    })

    messageContent.addEventListener('keypress', e => {
        if(e.key === 'Enter') {
            sendMessage(messageContent);
        }
    });

    socket.on("message", (data) => {
        newMessage(data.message);
    });

    function sendMessage(msgInput) {
        if(msgInput.value !== '') {
            socket.emit("message", {
                message: msgInput.value,
                room: (new URLSearchParams(window.location.search)).get('id')
            })
            msgInput.value = '';
        }
    }

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
}
