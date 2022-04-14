import {io} from 'socket.io-client';


let queryParams = new URLSearchParams(window.location.search);

if(queryParams.get('id')) {

    const roomNameBar = document.getElementById("room-name");
    roomNameBar.textContent = queryParams.get("id");
    
    const socket = io("/channel", {
        query: 'id='+ queryParams.get('id')
    });


    const sendMessageBtn = document.querySelector("#send-message");
    const messageContent = document.querySelector("input#message")
    const messageBox = document.querySelector(".chat__message-box");

    roomNameBar.addEventListener('click', e => {
        navigator.clipboard.writeText(window.location.href);
    })

    sendMessageBtn.addEventListener('click', () => {
        sendMessage(messageContent);
    })

    messageContent.addEventListener('keypress', e => {
        if(e.key === 'Enter') {
            sendMessage(messageContent);
        }
    });

    socket.on("message", (data) => {
        newMessage(data);
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


    function newMessage(msgData) {
        const newMsg = document.createElement("div");
        newMsg.classList = "chat__message-box__message";
        
        const msgUsername = document.createElement("p");
        msgUsername.classList = "chat__message-box__message__username";
        msgUsername.textContent = msgData.username ? msgData.username : "Anonymous";

        const msgContent = document.createElement("p");
        msgContent.classList = "chat__message-box__message__content";
        msgContent.textContent = msgData.message;
        
        const msgDate = document.createElement("p");
        msgDate.classList = "chat__message-box__message__date";
        msgDate.textContent = msgData.date;

        newMsg.appendChild(msgUsername);
        newMsg.appendChild(msgContent);
        newMsg.appendChild(msgDate);
        messageBox.appendChild(newMsg);

        messageBox.scrollTop = messageBox.scrollHeight;
    }
}
