# Websocket chat app

Small project to explore websockets a little. Main goal (which I accomplished) was to make an app that creates
dynamic rooms to which you can join and chat with your friends. After creating a room a user is assigned
to specific room (id of that room is a part of URL, it's a query parameter). To share that room with others
user has to send the link of that room to whomever he wants to join in. After everyone leaves, the chat room
gets deleted. 

The tools I used:

Backend:
- Node.js
- Express
- Socket.io
- Crypto
 
Frontend:
- HTML
- CSS
- SASS

You can test the app at:
https://quick-chat-test.herokuapp.com/
