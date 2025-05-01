const socketIO = require('socket.io');

let onlineUsers = new Map();

const setupSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('🔌 New socket connected:', socket.id);

    socket.on('go-online', (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log(`✅ ${userId} is online`);
    });

    socket.on('disconnect', () => {
      for (let [userId, sockId] of onlineUsers.entries()) {
        if (sockId === socket.id) {
          onlineUsers.delete(userId);
          console.log(`❌ ${userId} disconnected`);
          break;
        }
      }
    });

    socket.on('join-room', (roomId) => {
      socket.join(roomId);
    });

    socket.on('leave-room', (roomId) => {
      socket.leave(roomId);
    });
  });
};

module.exports = setupSocket;
