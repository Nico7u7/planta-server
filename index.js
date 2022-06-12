const express = require('express');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//start the server
const server = app.listen(app.get('port'), () => {
    console.log('server on port' , app.get('port'));
})

const socketIO = require('socket.io');
const io = socketIO(server);

//web sockets
io.on('connection', () => {
    console.log('new Connection');
    socketIO.emit("test event","hola como estas");
});

io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});