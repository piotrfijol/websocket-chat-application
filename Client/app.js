import {io} from 'socket.io-client';

io.connect("http://localhost:3000");

console.log("Połączono");