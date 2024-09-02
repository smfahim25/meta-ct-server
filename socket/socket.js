const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http'); 
const app = express();

const server = http.createServer(app); 
const io = socketIO(server, {
    cors: {
        origin: "*",  
        methods: ["GET", "POST"],
    }
});

const getReceiverSocketId = (reciverId) =>{
    return userSocketMap[reciverId];
}

const userSocketMap = {};
// Socket.IO Connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != undefined){
        userSocketMap[userId]=socket.id;
        
    }

    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server,getReceiverSocketId };
